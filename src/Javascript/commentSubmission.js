// Comment submission functionality for Courserr
class CommentSubmission {
  constructor() {
    this.currentCourseId = null;
    this.init();
  }

  init() {
    // Wait for courses to load
    if (!coursesLoaded) {
      setTimeout(() => this.init(), 100);
      return;
    }

    this.setupCommentForm();
  }

  setupCommentForm() {
    // Create comment submission form
    const commentForm = document.createElement('div');
    commentForm.id = 'commentSubmissionForm';
    commentForm.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      z-index: 10000;
      width: 90%;
      max-width: 500px;
      display: none;
    `;

    commentForm.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3 style="margin: 0; color: #006A6A;">Submit Course Review</h3>
        <button id="closeCommentForm" style="background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
      </div>
      
      <form id="commentForm">
        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 500;">Your Rating (1-5 stars)</label>
          <div id="starRating" style="display: flex; gap: 5px;">
            ${Array.from({length: 5}, (_, i) => 
              `<span class="star" data-rating="${i+1}" style="font-size: 24px; cursor: pointer; color: #ddd;">★</span>`
            ).join('')}
          </div>
          <input type="hidden" id="rating" name="rating" required>
        </div>

        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 500;">Grade Received</label>
          <select id="grade" name="grade" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <option value="">Select Grade</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
            <option value="F">F</option>
          </select>
        </div>

        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 500;">Time Spent per Week (hours)</label>
          <input type="number" id="timeSpent" name="timeSpent" min="0" max="50" required 
                 style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
        </div>

        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 500;">Difficulty (1-5)</label>
          <select id="difficulty" name="difficulty" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <option value="">Select Difficulty</option>
            <option value="1">1 - Very Easy</option>
            <option value="2">2 - Easy</option>
            <option value="3">3 - Moderate</option>
            <option value="4">4 - Hard</option>
            <option value="5">5 - Very Hard</option>
          </select>
        </div>

        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 500;">Your Grade Level</label>
          <select id="studentGrade" name="studentGrade" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <option value="">Select Grade Level</option>
            <option value="9">9th Grade</option>
            <option value="10">10th Grade</option>
            <option value="11">11th Grade</option>
            <option value="12">12th Grade</option>
            <option value="Graduate">Graduate</option>
          </select>
        </div>

        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 500;">Semester Taken</label>
          <select id="semesterTaken" name="semesterTaken" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <option value="">Select Semester</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
        </div>

        <div style="margin-bottom: 15px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 500;">Year Taken</label>
          <input type="number" id="yearTaken" name="yearTaken" min="2020" max="${new Date().getFullYear()}" required 
                 style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 5px; font-weight: 500;">Your Review</label>
          <textarea id="commentText" name="commentText" rows="4" required 
                    placeholder="Share your experience with this course..."
                    style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; resize: vertical;"></textarea>
        </div>

        <div style="display: flex; gap: 10px; justify-content: flex-end;">
          <button type="button" id="cancelComment" style="padding: 10px 20px; border: 1px solid #ddd; background: white; border-radius: 4px; cursor: pointer;">Cancel</button>
          <button type="submit" style="padding: 10px 20px; background: #006A6A; color: white; border: none; border-radius: 4px; cursor: pointer;">Submit Review</button>
        </div>
      </form>
    `;

    document.body.appendChild(commentForm);
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Star rating
    document.querySelectorAll('.star').forEach(star => {
      star.addEventListener('click', (e) => {
        const rating = parseInt(e.target.dataset.rating);
        this.setStarRating(rating);
      });

      star.addEventListener('mouseenter', (e) => {
        const rating = parseInt(e.target.dataset.rating);
        this.highlightStars(rating);
      });
    });

    document.getElementById('starRating').addEventListener('mouseleave', () => {
      this.highlightStars(0);
    });

    // Form submission
    document.getElementById('commentForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitComment();
    });

    // Close form
    document.getElementById('closeCommentForm').addEventListener('click', () => {
      this.hideForm();
    });

    document.getElementById('cancelComment').addEventListener('click', () => {
      this.hideForm();
    });

    // Close on background click
    document.getElementById('commentSubmissionForm').addEventListener('click', (e) => {
      if (e.target.id === 'commentSubmissionForm') {
        this.hideForm();
      }
    });
  }

  setStarRating(rating) {
    document.getElementById('rating').value = rating;
    this.highlightStars(rating);
  }

  highlightStars(rating) {
    document.querySelectorAll('.star').forEach((star, index) => {
      if (index < rating) {
        star.style.color = '#ffd700';
      } else {
        star.style.color = '#ddd';
      }
    });
  }

  showForm(courseId, courseName) {
    this.currentCourseId = courseId;
    document.getElementById('commentSubmissionForm').style.display = 'block';
    document.querySelector('#commentSubmissionForm h3').textContent = `Submit Review for ${courseName}`;
    
    // Reset form
    document.getElementById('commentForm').reset();
    document.getElementById('rating').value = '';
    this.highlightStars(0);
  }

  hideForm() {
    document.getElementById('commentSubmissionForm').style.display = 'none';
    this.currentCourseId = null;
  }

  async submitComment() {
    const formData = new FormData(document.getElementById('commentForm'));
    
    const commentData = {
      text: formData.get('commentText'),
      rating: parseInt(formData.get('rating')),
      grade: formData.get('grade'),
      timeSpent: parseInt(formData.get('timeSpent')),
      difficulty: parseInt(formData.get('difficulty')),
      studentGrade: formData.get('studentGrade'),
      semesterTaken: formData.get('semesterTaken'),
      yearTaken: parseInt(formData.get('yearTaken'))
    };

    // Validate form
    if (!this.validateForm(commentData)) {
      return;
    }

    try {
      // Show loading state
      const submitBtn = document.querySelector('#commentForm button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      // Submit comment via API
      const response = await window.CourserrAPI.submitComment(this.currentCourseId, commentData);
      
      // Show success message
      this.showMessage('Thank you for your review! It will be reviewed before being published.', 'success');
      
      // Hide form
      this.hideForm();
      
    } catch (error) {
      console.error('Error submitting comment:', error);
      this.showMessage('Failed to submit review. Please try again.', 'error');
    } finally {
      // Reset button
      const submitBtn = document.querySelector('#commentForm button[type="submit"]');
      submitBtn.textContent = 'Submit Review';
      submitBtn.disabled = false;
    }
  }

  validateForm(data) {
    if (!data.text || data.text.length < 10) {
      this.showMessage('Please write at least 10 characters for your review.', 'error');
      return false;
    }

    if (!data.rating || data.rating < 1 || data.rating > 5) {
      this.showMessage('Please select a rating.', 'error');
      return false;
    }

    if (!data.grade) {
      this.showMessage('Please select your grade.', 'error');
      return false;
    }

    if (!data.timeSpent || data.timeSpent < 0 || data.timeSpent > 50) {
      this.showMessage('Please enter valid time spent (0-50 hours).', 'error');
      return false;
    }

    if (!data.difficulty || data.difficulty < 1 || data.difficulty > 5) {
      this.showMessage('Please select difficulty level.', 'error');
      return false;
    }

    if (!data.studentGrade) {
      this.showMessage('Please select your grade level.', 'error');
      return false;
    }

    if (!data.semesterTaken) {
      this.showMessage('Please select semester taken.', 'error');
      return false;
    }

    if (!data.yearTaken || data.yearTaken < 2020 || data.yearTaken > new Date().getFullYear()) {
      this.showMessage('Please enter valid year.', 'error');
      return false;
    }

    return true;
  }

  showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 4px;
      color: white;
      font-weight: 500;
      z-index: 10001;
      max-width: 300px;
      ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }
}

// Initialize comment submission system
let commentSubmission = null;

document.addEventListener('DOMContentLoaded', () => {
  commentSubmission = new CommentSubmission();
});

// Global function to show comment form
window.showCommentForm = function(courseId, courseName) {
  if (commentSubmission) {
    commentSubmission.showForm(courseId, courseName);
  }
};
