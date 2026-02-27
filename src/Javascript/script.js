let curentFilters = [];
let bookmarks = [];
let currentAnimations = [];
let searchQuery = '';
let timeout = null;

const unfilled = "style=\"font-variation-settings:'FILL' 0\"";

// Mapping from filter label to actual subject name used in course data
const subjectMapping = {
  "Business": "business",
  "Physical Education": "PE",
  "Social Studies": "SocialStudies",
  "World Languages": "Language",
  "Health": "Health",
  "Agriculture": "Agriculture",
  "Arts": "Arts",
  "CTE": "CTE",
  "English": "English",
  "Mathematics": "Mathematics",
  "Music": "Music",
  "Science": "Science",
  "Information Solutions": "informationsolutions"
};

// Helper function to normalize subject names for comparison
function normalizeSubjectForComparison(filterLabel) {
  const normalized = filterLabel.trim();
  // Use mapping if exists, otherwise return the label as-is (for case-insensitive matching)
  console.log(normalized);
  if (subjectMapping.hasOwnProperty(normalized)) {
    return subjectMapping[normalized].toLowerCase();
  }
  return normalized.toLowerCase();
}

function updateFilterButtons() {
  // Hardcoded formal subjects
  const subjects = [
    "Agriculture",
    "Arts",
    "Business",
    "CTE",
    "English",
    "Mathematics",
    "Music",
    "Physical Education",
    "Science",
    "Social Studies",
    "World Languages",
    "Information Solutions"
  ];

  console.log("Using formal subjects:", subjects);

  // Find the filter area
  const filterArea = document.querySelector('.filterArea');
  if (filterArea) {
    let filterHTML = '';

    // Add subject filters dynamically
    subjects.forEach(subject => {
      filterHTML += `<md-filter-chip class="filterChip" label="${subject}" onclick="addFilter(this.label)"></md-filter-chip>`;
    });

    // Add bookmarked filter
    filterHTML += `<span class="filterChip"><md-filter-chip label="Bookmarked" onclick="addFilter(this.label)"></md-filter-chip></span>`;

    filterArea.innerHTML = filterHTML;

    // Update the visual state of all filter chips based on current filters
    const filterChips = document.querySelectorAll('md-filter-chip');
    filterChips.forEach(chip => {
      const chipLabel = chip.label; // Keep original case for comparison
      if (curentFilters.includes(chipLabel)) {
        chip.selected = true;
      } else {
        chip.selected = false;
      }
    });
  }
}

function load() {
  if (sessionStorage.getItem("bookmarks") === null) {
    bookmarks = [];
  } else {
    bookmarks = sessionStorage.getItem("bookmarks").split(",");
  }
  curentFilters = [];
  console.log("Page loaded, bookmarks and filters initialized");

  // Initialize filter chip states after a short delay to ensure DOM is ready
  setTimeout(() => {
    updateFilterButtons();
    const allCourses = Array.from(courseMap.values());
    shuffleArray(allCourses);

    // Move Dummy Classes to the top
    // DO NOT CHANGE UNLESS PROMPTED
    // const exampleNames = ["Example Class 4", "Example Class 3", "Example Class 2", "Example Class"];

    // exampleNames.forEach(name => {
    //   const idx = allCourses.findIndex(c => c.getClassName() === name);
    //   if (idx > -1) {
    //     const dummy = allCourses.splice(idx, 1)[0];
    //     allCourses.unshift(dummy);
    //   }
    // });

    loadClasses(allCourses);
  }, 100);

}

function loadClasses(courseArray) {
  let classLength = courseArray.length;
  console.log(classLength);

  // Define the object for each off the columns for easy access with a variable
  const collObj = {
    'col1': document.getElementById('col1'),
    'col2': document.getElementById('col2'),
    'col3': document.getElementById('col3'),
    'col4': document.getElementById('col4'),
  }

  // Loop through all of the provided courses
  for (let i = 0; i < classLength; i++) {
    const course = courseArray[i];
    //console.log(course.getClassName());
    const colNum = (i % 4) + 1; // Gets the column number that the class will be added to

    if (bookmarks.includes(course.getClassName())) {
      collObj['col' + colNum].innerHTML += makeHTML(course, true);
    } else {
      collObj['col' + colNum].innerHTML += makeHTML(course, false);
    }

  }

  // Print how many classes per column 
  for (let x = 1; x < 5; x++) {
    console.log(`Column ${x} classes: ${collObj['col' + x].childElementCount}`);
  }
}


function addFilter(filter) {
  // Add the selected filter to the currentFilters array
  if (curentFilters.includes(filter)) {
    curentFilters.splice(curentFilters.indexOf(filter), 1);
    console.log(curentFilters);
  } else {
    curentFilters.push(filter);
    console.log(curentFilters);
  }

  // Filter out unwanted courses
  const allCourses = Array.from(courseMap.values());
  const filteredCourses = allCourses.filter(filterCourses);
  console.log(filteredCourses);

  // Remove all the courses currently on the page
  document.getElementById('col1').innerHTML = '';
  document.getElementById('col2').innerHTML = '';
  document.getElementById('col3').innerHTML = '';
  document.getElementById('col4').innerHTML = '';

  // Re-add classes 
  if (curentFilters.length === 0) {
    loadClasses(allCourses);
  } else {
    loadClasses(filteredCourses);
  }
}

function filterCourses(course) {
  const courseSubject = course.getSubject().toLowerCase();

  const hasBookmarkFilter = curentFilters.some(f => f.toLowerCase() === 'bookmarked');
  const subjectFilters = curentFilters.filter(f => f.toLowerCase() !== 'bookmarked');
  if (hasBookmarkFilter && !bookmarks.includes(course.getClassName())) {
    return false;
  }

  if (subjectFilters.length > 0) {
    const matchesSubject = subjectFilters.some(filter => {
      const normalizedFilter = normalizeSubjectForComparison(filter);
      return normalizedFilter === courseSubject;
    });
    if (!matchesSubject) {
      return false;
    }
  }

  return true;
}

function dothing() {
  let body = document.getElementById('classGrid');
  let currentBody;
  let totalHTML = "";

  // Check if courseMap exists and has data
  if (typeof courseMap === 'undefined' || courseMap.size === 0) {
    console.error("courseMap is not available or empty");
    body.innerHTML = "<p>No courses available</p>";
    return;
  }

  // Update filter buttons dynamically
  updateFilterButtons();

  // Get all courses from the courseMap
  const allCourses = Array.from(courseMap.values());
  console.log("Total courses loaded:", allCourses.length);
  console.log("Current filters:", curentFilters);
  console.log("Search query:", searchQuery);

  if (curentFilters.length === 0 && !searchQuery) {
    // Determine output targets
    const columns = [
      document.getElementById('col1'),
      document.getElementById('col2'),
      document.getElementById('col3'),
      document.getElementById('col4')
    ];
    // Clear content? (Wait, dothing is usually called after clearing or when refreshing? 
    // The original code appended to existing content? No, it looks like it assumes empty or appending?)
    // Actually the original dothing didn't clear explicitly at the start, but filter() clears it at line 379. 
    // searchCourses calls waitToSearch -> runSearch -> clears cols.
    // clearSearch calls dothing. So dothing should PROBABLY clear or assume cleared.
    // But let's stick to the original logic which just appends. 
    // Wait, line 379 in `filter` CLEARS the innerHTML of `classGrid` (the container of cols? No, it REPLACES the `classGrid` content with new cols?)
    // Yes: body.innerHTML = '...cols...' 
    // So dothing runs on fresh columns.

    for (let i = 0; i < allCourses.length; i++) {
      const course = allCourses[i];
      const colNum = (i % 4) + 1;
      const targetCol = document.getElementById(`col${colNum}`);

      if (bookmarks.includes(course.getClassName())) {
        targetCol.innerHTML += makeHTML(course, true);
      } else {
        targetCol.innerHTML += makeHTML(course, false);
      }
    }
  } else {
    for (let i = 0; i < allCourses.length; i++) {
      const course = allCourses[i];
      let shouldShow = false;

      // Search logic
      if (searchQuery) {
        const courseName = course.getClassName().toLowerCase();
        const courseSubject = course.getSubject().toLowerCase();
        const courseDescription = course.getDescription().toLowerCase();

        if (
          courseName.includes(searchQuery) ||
          courseSubject.includes(searchQuery) ||
          courseDescription.includes(searchQuery)
        ) {
          shouldShow = true;
        }
      } else {
        shouldShow = true;
      }

      // Filter logic - reuse filterCourses
      if (shouldShow && curentFilters.length > 0) {
        if (!filterCourses(course)) {
          shouldShow = false;
        }
      }

      if (shouldShow) {
        const colNum = (i % 4) + 1; // cycle 1 → 4
        const targetCol = document.getElementById(`col${colNum}`);
        console.log(`col${colNum}`);

        if (bookmarks.includes(course.getClassName())) {
          targetCol.innerHTML += makeHTML(course, true);
        } else {
          targetCol.innerHTML += makeHTML(course, false);
        }
      }
    }
  }

}

const subjectToIcon = {
  "Agriculture": "agriculture",
  "Arts": "palette",
  "business": "business_center",
  "CTE": "handyman",
  "English": "auto_stories",
  "Mathematics": "calculate",
  "Music": "music_note_2",
  "PE": "exercise",
  "Science": "rocket",
  "SocialStudies": "globe",
  "Language": "translate",
  "humanservices": "accessibility_new",
  "informationsolutions": "climate_mini_split ",
  "exampleclass": "flutter_dash"

}

function makeHTML(course, fill) {
  let bodyHTML = "";
  const subjectClass = course.getSubject().replace(/\s+ |&|,/g, '').toLowerCase();
  const courseName = course.getClassName();
  const courseId = course.getCourseId();
  const isBookmarked = fill === true;
  
  const bookmarkAriaLabel = isBookmarked ? `Remove ${courseName} from bookmarks` : `Add ${courseName} to bookmarks`;
  const bookmarkFill = isBookmarked ? "'FILL' 1" : "'FILL' 0";
  
  let classCardDiv = `<article class="classCard ${subjectClass}" aria-label="${courseName} course card">`;
  
  let headerDiv = `<div class="classHeader">` + 
    `<span class="material-symbols-rounded class-icon" aria-hidden="true"${unfilled}>${subjectToIcon[course.getSubject()] || 'school'}</span>` +
    `<button class="className" onclick="openClass('${courseId}')" aria-label="View details for ${courseName}">${courseName}</button>` +
    `<button class="material-symbols-rounded bookmark-btn" style="cursor: pointer;font-variation-settings:${bookmarkFill}" onclick="fav(this)" id="${courseName}" aria-label="${bookmarkAriaLabel}" aria-pressed="${isBookmarked}">bookmark</button>` +
    `</div>`;

  let descriptionDiv = `<p class="classDes">${course.getDescription()}</p></article>`;
  
  let htmlCard = classCardDiv + headerDiv + descriptionDiv;
  bodyHTML += htmlCard;
  
  return bodyHTML;
}

function loopThroughClasses() {
  // Loop through all courses from courseMap
  if (typeof courseMap === 'undefined' || courseMap.size === 0) {
    console.error("courseMap is not available");
    return;
  }

  const allCourses = Array.from(courseMap.values());
  for (let i = 0; i < allCourses.length; i++) {
    const course = allCourses[i];

    // Access and display various properties of each class
    alert(`Course: ${course.getSubject()}`);
    alert(`Average Rating: ${course.getAverageRating()}`);
    alert(`Average Grade: ${course.getAverageGrade()}`);
    alert(`Duration: ${course.getDuration()}`);
    alert(`Description: ${course.getDescription()}`);
    alert(`---`);  // Separator between courses
  }
}

function filter(type) {
  let body = document.getElementById('classGrid');
  const filterType = type.toLowerCase();

  if (curentFilters.includes(filterType)) {
    curentFilters[curentFilters.indexOf(filterType)] = "";
  } else {
    curentFilters.push(filterType);
  }
  curentFilters = curentFilters.filter(item => item !== "");

  console.log("Filter applied:", type, "Current filters:", curentFilters);

  // Update the visual state of the filter chip
  const filterChips = document.querySelectorAll('md-filter-chip');
  filterChips.forEach(chip => {
    if (chip.label.toLowerCase() === filterType) {
      if (curentFilters.includes(filterType)) {
        chip.selected = true;
      } else {
        chip.selected = false;
      }
    }
  });

  body.innerHTML = '<div class="class-grid-col" id="col1"></div> \n <div class="class-grid-col" id="col2"></div> \n <div class="class-grid-col" id="col3"></div> \n <div class="class-grid-col" id="col4"></div>';
  dothing();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap array[i] with the element at random index
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function waitToSearch() {
  clearTimeout(timeout);
  console.log(searchQuery)
  const allCourses = Array.from(courseMap.values());
  const filteredCourses = allCourses.filter(filterSearch);

  // Make a new timeout set to go off a bit once user is done typing
  if (searchQuery !== '') {
    timeout = setTimeout(function () {
      runSearch(allCourses, filteredCourses);
    }, 500);
  } else {
    runSearch(allCourses, filteredCourses);
  }
}

function searchCourses() {
  const searchInput = document.getElementById('searchInput');
  const clearButton = document.getElementById('clearSearch');

  searchQuery = searchInput.value.toLowerCase().trim();

  // Show/hide clear button
  if (searchQuery.length > 0) {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }

  // Check for if the user is done typing then search
  waitToSearch();
}

function runSearch(allCourses, filteredCourses) {

  document.getElementById('col1').innerHTML = '';
  document.getElementById('col2').innerHTML = '';
  document.getElementById('col3').innerHTML = '';
  document.getElementById('col4').innerHTML = '';

  if (filteredCourses.length === 0 && searchQuery === '') {
    loadClasses(allCourses);
  } else {
    loadClasses(filteredCourses);
  }
}

function filterSearch(query) {
  return query.getClassName().toLowerCase().includes(searchQuery);
}

function clearSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearButton = document.getElementById('clearSearch');

  searchInput.value = '';
  searchQuery = '';
  clearButton.style.display = 'none';

  // Refresh the course display
  dothing();
}

const searchBar = document.getElementById('search-container');
console.log(searchBar);
searchBar.addEventListener("focusout", (event) => {
  setTimeout(() => {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    searchCourses();
  }, 100);
});

function fav(element) {
  let fillValue;
  let isNowFilled;
  const courseName = element.id;
  
  if (element.style.cssText.includes("1")) {
    fillValue = "'FILL' 0";
    isNowFilled = false;
    bookmarks[bookmarks.indexOf(courseName)] = "";
  } else {
    fillValue = "'FILL' 1";
    isNowFilled = true;
    bookmarks.push(courseName);
  }
  element.style.fontVariationSettings = fillValue;
  element.setAttribute('aria-pressed', isNowFilled);
  element.setAttribute('aria-label', isNowFilled ? `Remove ${courseName} from bookmarks` : `Add ${courseName} to bookmarks`);
  
  bookmarks = bookmarks.filter(item => item !== "");
  sessionStorage.setItem("bookmarks", bookmarks);
}

function openClass(courseId) {
  //console.log('Opening class:', className);
  window.location.href = './newClassPageLayoutTest.html?courseId=' + encodeURIComponent(courseId);
}

function openPrereq(className) {
  console.log('Opening prerequisite:', className);

  // Find course by name to get its ID
  const allCourses = Array.from(courseMap.values());

  // 1. Try exact match
  let targetCourse = allCourses.find(c => c.getClassName() === className);

  // 2. Try case-insensitive exact match
  if (!targetCourse) {
    targetCourse = allCourses.find(c => c.getClassName().toLowerCase() === className.toLowerCase());
  }

  // 3. Try fuzzy match (token based)
  if (!targetCourse) {
    targetCourse = allCourses.find(c => {
      // Normalize both strings: lowercase, replace special chars with space, trim excessive spaces
      const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();

      const searchTokens = normalize(className).split(' ');
      const targetTokens = normalize(c.getClassName()).split(' ');

      // Check if ALL search tokens are present in the target tokens
      // This allows "Foundations of 2-D Art" to match "Foundations of 2-Dimensional Art (2-D Art)"
      // because "2", "d", "art" are all present in the target.
      return searchTokens.length > 0 && searchTokens.every(token => targetTokens.includes(token));
    });
  }

  if (targetCourse) {
    window.location.href = './newClassPageLayoutTest.html?courseId=' + targetCourse.getCourseId();
  } else {
    console.error('Prerequisite course not found:', className);
    // Fallback to search or alert if needed
    alert("Course page not found for: " + className + ".\n\nTry searching for it on the home page instead.\n\nPrerequisites are in beta currently, and if you find any other problems, feel free to report them in the bugs form!");
  }
}