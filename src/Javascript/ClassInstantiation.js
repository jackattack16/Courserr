const introductionToAgriscience = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "9,10", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This course introduces students to the whole agricultural education program. Students will learn about classroom and FFA opportunities and develop a Supervised Agricultural Experience (SAE). Other units include communication in agriculture and agricultural sciences investigation. Students are strongly encouraged to take Agriculture, Food, and Natural Resources with this course.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Agriscience", // className
    [],// grades
    [], //classDifficulty
    [] // tags
);



const AgricultureFoodAndNaturalResources = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "9,10", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "This course continues to build off of skills learned in Introduction to Agriscience while focusing on the natural resources, plant and animal, and power, structural and technical systems pathways of agriculture. Students are strongly encouraged to take introduction to Agriscience with this course.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Agriculture, Food, & Natural Resources", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const NaturalResources = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "9,10,11,12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students will examine the importance of natural resources in our lives and how to manage them for our benefit. Education units will include opportunities in natural resources, soil formation and physical properties, land use, conservation and management, soil fertility, wildlife management, air and water quality management, and weather and climate.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Natural Resources", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const AnimalScience = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "10,11,12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "In this introductory animal science course students will learn about the value and utilization of animals in our lives, covering both livestock and companion animals. Animal nutrition, growth, health, behavior, reproduction, and genetics will be explored.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Animal Science", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);

const PlantScience = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "10,11,12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This course will focus on landscaping, floriculture, and vegetable and flower production. Hands-on activities may include plant propagation and growth, soils and growing media, plant protection, and integrated pest management.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Plant Science", // className
    [], // grades
    [], //classDifficulty
    [] // tags
); 

const FoodScienceAndSafety = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "10,11,12", // usualGrade
    "None", // prerequisite
    "Year", // duration
    "Year-long", // Semester Offered
    "None", // honorsAP
    "Students will complete hands-on activities, projects, and problems that simulate actual concepts and situations found in the food science and safety industry, allowing students to build content knowledge and technical skills. Students will investigate areas of food science, including food safety, food chemistry, food processing, food product development, and marketing.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Food Science & Safety", // className
    [], // grades
    [], //classDifficulty
    [] // tags
); 



const AgriculturalPowerAndTechnology = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "10,11,12", // usualGrade
    "None", // prerequisite
    "Year", // duration
    "Year-long", // Semester Offered
    "None", // honorsAP
    "Agriculture Power and Technology course is a foundation course within the CASE sequence of courses. The course provides students a variety of experiences that are in the fields of agricultural engineering. Students are immersed in inquiry-based exercises that tie in the math and science of agricultural mechanics and engineering.  Throughout the course, students apply technical skills while becoming competent in the process used to operate, repair, engineer, and design agricultural tools and equipment.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Agricultural Power and Technology", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const AgriculturalBusinessFoundation = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "11,12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This CASE course utilizes activities, projects, and problems that incorporate business mathematics and reading and writing components in the context of agriculture. This course is structured for all students to experience an overview of agricultural business management. Students will learn about starting a business, the cost of doing business, how to manage risk, and finalizing a business plan.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Agricultural Business Foundation", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const AdvancedAnimalScience = new Class(
    true, // dualCredit
    "Agriculture", // subject
    "11,12", // usualGrade
    "Animal Science", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This course explores issues impacting the United States and the international animal industry. The main emphasis of the course is on the animal industry in the global market, animal production management, anatomy and physiology, and marketing of farm animals.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Animal Science", // className
    [], // grades
    [], //classDifficulty
    [], // tags
);



const AdvancedPlantScience = new Class(
    true, // dualCredit
    "Agriculture", // subject
    "11,12", // usualGrade
    "Plant Science", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This course explores the general principles of crop production and management. Major areas of study include food production, crop classification, plant growth factors, seed production and variety selection.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Plant Science", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const AgResearchAndDevelopmentCapstone = new Class(
    false, // dualCredit
    "Agriculture", // subject
    "12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "This capstone course will culminate students’ experiences in agriculture based on the pathway of study they pursued.  In this course students will develop and Improve critical thinking and employability skills as they learn to solve real-world problems, conduct research, analyze data, and develop new products and protocols.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Ag Research & Development Capstone", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const ComputerAidedManufacturing = new Class(
    false, // dualCredit
    "CTE", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "In this beginning CAD class, students explore computer-based design systems and are challenged to invent, innovate, and problem solve while designing and building projects. Primary emphasis is on design, with hands-on use of software and equipment including a laser engraver, 3D printer, CNC plasma cutter, and screen-printing tools.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Computer-aided Manufacturing", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const introductiontoCarpentry = new Class(
    false, // dualCredit
    "CTE", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students learn the basics of carpentry and woodworking techniques with a strong emphasis on lab safety, proper setup, and correct operation of equipment. Required build projects demonstrate proficiency in safe tool use and foundational skills.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Carpentry", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const introductionToManufacturing = new Class(
    false, // dualCredit
    "CTE", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "An introduction to manufacturing with hands-on metal fabrication techniques. Students practice cutting, bending, welding, and machining while completing required projects to prove safe setup and operation of shop equipment.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Manufacturing", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const engineeringCADDDrafting = new Class(
    false, // dualCredit
    "CTE", // subject
    "10, 11, 12", // usualGrade
    "Computer Aided Manufacturing", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Use CADD tools to produce complete 2D and 3D drawings. Students develop proportion, geometric construction, scaling, visualization, and design skills through a range of modeling applications and drafting exercises.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Engineering CADD Drafting", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const architecturalCADDDrafting = new Class(
    false, // dualCredit
    "CTE", // subject
    "10, 11, 12", // usualGrade
    "Computer Aided Manufacturing", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Apply CADD to architectural design problems, exploring floor plans, elevations, and site considerations. Coursework examines energy savings, renewable resources, and environmental impact within building design.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Architectural CADD Drafting", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const manufacturingAndWelding = new Class(
    false, // dualCredit
    "CTE", // subject
    "10, 11, 12", // usualGrade
    "Introduction To Manufacturing", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "A second-level metalworking course that advances skills from Intro to Manufacturing. Focus areas include metal removal, precision machining, out-of-position welding, reading welding diagrams, and welding accuracy using equipment such as the engine lathe, vertical mill, SMAW/GMAW/TIG/oxy-acetylene welders, plasma cutter, and CNC plasma table. Projects integrate materials and processes in individual and team builds.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Manufacturing and Welding", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedManufacturingAndWelding = new Class(
    false, // dualCredit
    "CTE", // subject
    "10, 11, 12", // usualGrade
    "Manufacturing and Welding", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "A third-level metalworking course emphasizing advanced machining and welding techniques. Students design and build complex projects that combine multiple skills and content areas, with opportunities to work with CNC technologies individually and in teams.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Manufacturing and Welding", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const woodworking1 = new Class(
    false, // dualCredit
    "CTE", // subject
    "10, 11, 12", // usualGrade
    "Introduction to Carpentry", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Builds on Intro to Carpentry skills. Students learn woodworking techniques such as joinery, epoxy work, and finishing, and are expected to design and build multiple wood projects. Additional topics may include basic CAD/3D modeling, basic CNC programming, and use of the laser engraver.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Woodworking 1", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const woodworking2 = new Class(
    false, // dualCredit
    "CTE", // subject
    "10, 11, 12", // usualGrade
    "Woodworking 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "An advanced continuation of Woodworking 1 focusing on complex joinery, in-depth project planning, and participation in a production run emphasizing student enterprise. Students continue to utilize laser engraving and CNC technologies.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Woodworking 2", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const carpentry1 = new Class(
    false, // dualCredit
    "CTE", // subject
    "10, 11, 12", // usualGrade
    "Introduction to Carpentry", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Focuses on the building trades with an emphasis on residential carpentry. Students learn basic home repair and introductory construction skills including plumbing, electrical, framing, drywall, and basic concrete applications. Course goal: build a small structure.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Carpentry 1", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const carpentry2 = new Class(
    false, // dualCredit
    "CTE", // subject
    "10, 11, 12", // usualGrade
    "Carpentry 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advances residential construction knowledge with project estimation, planning, and jobsite safety. Capstone objective: plan and build a functional tiny house.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Carpentry 2", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const contractWoodworking = new Class(
    false, // dualCredit
    "CTE", // subject
    "11, 12", // usualGrade
    "Woodworking 2 and Carpentry 2", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students contract individually with the instructor for project scope and work schedule. Independent lab work on approved projects occurs with instructor oversight. Application and prior communication with the instructor are required before registration.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Contract Woodworking", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const itecContractAdvancedTechnology = new Class(
    false, // dualCredit
    "CTE", // subject
    "11, 12", // usualGrade
    "Woodworking 2, Carpentry 2 OR Advanced Metals and Welding **Instructor Approval", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Individually contracted advanced lab experience with instructor approval. Students work independently on woods, metals, or hybrid projects to deepen technical skills. Application and prior communication with the instructor are required before registration.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "ITEC Contract Advanced Technology", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const internshipProgram1 = new Class(
    true, // dualCredit
    "CTE", // subject
    "11, 12", // usualGrade
    "**Instructor Approval Required", // prerequisite
    "Semester (2-period block)", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "A dual-credit, two-period block designed to launch students toward highly skilled occupations. After an application and interest inventory, students are placed with quality employers for a semester-long unpaid internship. Emphasis is on initiative, professionalism, and meeting independent course requirements and deadlines.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Internship Program 1 – Dual Credit Courses", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const internshipProgram2 = new Class(
    true, // dualCredit
    "CTE", // subject
    "12", // usualGrade
    "Internship 1 – Seniors only", // prerequisite
    "Semester (2-period block)", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "A continuation of Internship 1 that deepens workplace skills and experiences. Students may explore additional fields or continue in a chosen path to further build occupational knowledge and professionalism in a dual-credit, two-period block format.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Internship Program 2 – Dual Credit Courses", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const foundationsOf2DArt = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "A one-semester introduction to 2D art with basic experiences in drawing, painting, printmaking, and art history. Students should bring a sketchbook. Serves as the prerequisite for all 2D courses except Graphic Design, 4D Art, and Photography.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Foundations of 2-Dimensional Art (2-D Art)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const drawingPaintingPrintmaking = new Class(
    false, // dualCredit
    "Arts", // subject
    "10, 11, 12", // usualGrade
    "Foundations of 2-D ART", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory course in drawing, painting, and printmaking with a focus on composition. Students should bring a sketchbook; one sheet of mat board is requested (provided if needed). Work includes both realistic and abstract art using media such as pen and ink, colored pencil, printmaking ink, watercolor, and acrylic.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Drawing, Painting, Printmaking", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedDrawingPaintingPrintmaking = new Class(
    false, // dualCredit
    "Arts", // subject
    "10, 11, 12", // usualGrade
    "Foundations of 2-D ART, Drawing, Painting, Printmaking", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced Levels 2–7 taken sequentially. Often scheduled with beginning levels in the same period. Students bring a sketchbook; one sheet of mat board is requested (provided if needed). Each level offers deeper study of art styles and advanced techniques, with choice of materials on select projects.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Drawing, Painting, Printmaking – Levels 2-7", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const graphicDesign1 = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "One-semester introduction to advertising and commercial art. Students apply elements and principles of design to create logos, product ads, posters, and web pages. Adobe Illustrator, InDesign, and Photoshop are taught; projects are customer-driven. One sheet of mat board is requested (provided if needed).", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Graphic Design", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedGraphicDesign = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "Graphic Design", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced Graphic Design Levels 2–7 taken sequentially. Often scheduled alongside beginning levels. Students create advanced, portfolio-ready design projects using Adobe InDesign, Photoshop, and Illustrator. One sheet of mat board is requested (provided if needed).", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Graphic Design: Levels 2-7", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const foundationsOf3DArt = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory course in 3D art covering ceramics, fibers, mixed media, jewelry, and metal tooling. Students learn the elements and principles of design in three-dimensional media. Prerequisite for Jewelry, Ceramics, and Advanced 3D Art. Students should bring a sketchbook.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Foundations of 3-Dimensional (3-D) Art", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advanced3DArt = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "Foundations of 3-D Art", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced Levels 2–8 taken sequentially. Often scheduled alongside beginning levels. Students develop individually determined projects and apply advanced skills in greater depth.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced 3-D Art: Levels 2-8", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const ceramics1 = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "Foundations of 3-D Art", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Expands concepts from Foundations of 3D Art in a studio environment. Students manage all phases of ceramics work, from wedging clay to kiln loading. Includes hand-built forms, wheel-thrown pottery, and glazing techniques. Serious commitment to work is expected.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Ceramics I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedCeramics = new Class(
    false, // dualCredit
    "Arts", // subject
    "10, 11, 12", // usualGrade
    "Foundations of 3-D Art; Ceramics 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Levels 2–7 enable students to advance their ceramics skills through organized, individual study programs. Students and instructors set specific goals for the semester. Often scheduled alongside beginning levels. Serious commitment required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Ceramics: Levels 2-7", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const jewelry1 = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "Foundations of 3-D Art", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduction to jewelry design and construction using various techniques. Builds on foundational skills with cold-construction, soldering, and casting methods.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Jewelry I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedJewelry = new Class(
    false, // dualCredit
    "Arts", // subject
    "10, 11, 12", // usualGrade
    "Foundations of 3-D Art; Jewelry 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Levels 2–7 in jewelry offer advanced exploration of adornment and techniques through individualized study. Often scheduled with beginning levels. Some material costs may apply.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Jewelry: Levels 2-7", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const foundationsOf4DArt = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory course in 4D art and animation using Adobe Creative Cloud and other programs to create special effects in print and video.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Foundations of 4-Dimensional Art (4D Art) & Animation", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advanced4DArt = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "Foundations of 4-D Art", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced study of hypermedia and animation. Students use Adobe Creative Cloud and other programs to create works, study animation history and principles, and produce their own videos and animations. Often scheduled with beginning levels.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced 4D Art & Animation: Levels 2-8", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const photography1 = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers darkroom photography fundamentals, including 35mm camera operation, black-and-white film development, and printing. Approximate materials cost: $75–$100. Cameras available for checkout. Serious commitment expected.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Photography I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedPhotography = new Class(
    false, // dualCredit
    "Arts", // subject
    "9, 10, 11, 12", // usualGrade
    "Photography 1", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Levels 2–8 in photography deepen skills with 35mm and digital photography. Includes advanced darkroom techniques (photograms, multiple exposures, texture screens, toning, solarization) and digital editing using Adobe Photoshop and Lightroom. Approximate materials cost: $75–$100.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Photography: Levels 2-8", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const introductionToBusiness = new Class(
    false, // dualCredit
    "business", // subject
    "9, 10", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Overview of entrepreneurship, management, human resources, marketing, and finance/accounting. Students explore the business world and begin developing skills sought by employers.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Business", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const marketingAndSelling = new Class(
    false, // dualCredit
    "business", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Project-based course introducing marketing concepts and basic sales techniques. Students explore creativity and innovation through hands-on projects across industries.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Marketing and Selling", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const accounting1 = new Class(
    true, // dualCredit
    "business", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduces the accounting cycle, financial reporting, and recording transactions for sole proprietorships. Students engage in hands-on simulations and activities applicable to all business careers.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Accounting 1 – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const businessAndPersonalLaw = new Class(
    false, // dualCredit
    "business", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Explores criminal, civil, employment, contract, consumer law, and estate planning through real and historic cases. Students learn legal rights and procedures for individuals and businesses.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Business and Personal Law", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const entrepreneurship1 = new Class(
    false, // dualCredit
    "business", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers business creation fundamentals. Students develop a business plan including marketing, financial projections, and operational planning to launch a new venture.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Entrepreneurship 1", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const accounting2 = new Class(
    false, // dualCredit
    "business", // subject
    "11, 12", // usualGrade
    "Accounting 1", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Expands on Accounting 1 by deepening understanding of accounting principles. Students participate in advanced simulations and activities to strengthen technical accounting skills.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Accounting 2", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const entrepreneurship2 = new Class(
    false, // dualCredit
    "business", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students operate Little Cyclone Central, a student-run enterprise. Responsibilities include managing production, inventory, finances, marketing, staffing, and operational policies.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Entrepreneurship 2", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const businessEngagementCollaborative = new Class(
    true, // dualCredit
    "business", // subject
    "11, 12", // usualGrade
    "Any Business or informationsolutions course or Instructor Approval", // prerequisite
    "Semester (2-period block)", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Work-based learning program connecting students with local businesses. Includes project work, mentoring, resume building, mock interviews, and job shadows to build professional skills and networks.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Business Engagement Collaborative – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedBusinessEngagementCollaborative = new Class(
    true, // dualCredit
    "business", // subject
    "11, 12", // usualGrade
    "Business Engagement Collaborative", // prerequisite
    "Semester (2-period block)", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Continuation of Business Engagement Collaborative with higher-level projects, deeper industry connections, and mentoring of first-year BEC students. Includes job shadows and mock interviews.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Business Engagement Collaborative – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const internshipProgramBusiness = new Class(
    true, // dualCredit
    "business", // subject
    "11, 12", // usualGrade
    "Instructor Approval Required", // prerequisite
    "Semester (2-period block)", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Internship 1: Semester-long unpaid placement with a quality employer based on application and interests. Highly independent with emphasis on initiative, professionalism, and meeting deadlines. Internship 2: Builds on Internship 1 with further career exploration and skill development.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Internship Program – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const entrepreneurship3 = new Class(
    false, // dualCredit
    "business", // subject
    "12", // usualGrade
    "Entrepreneurship 2", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Students imagine, pitch, start, and run their own business throughout the year. Participate in pitch competitions for feedback and funding opportunities. Focus on entrepreneurial skill development.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Entrepreneurship 3/Start Up", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const personalFinance = new Class(
    false, // dualCredit
    "business", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Required course for seniors focusing on budgeting, paying for college, debt management, and strategies for financial independence and stability.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Personal Finance – Graduation Requirement", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const english9Workshop = new Class(
    false,
    "English",
    "9",
    "None",
    "Semester",
    "Fall",
    "None",
    "Introduces creative (narrative & poetry), informational (journalistic), and argumentative writing skills, including close reading and academic documentation.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "English 9 Workshop (writing)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const english9Literature = new Class(
    false,
    "English",
    "9",
    "None",
    "Semester",
    "Spring",
    "None",
    "Focuses on reading, analysis, and speaking skills. Units include independent reading, Romeo & Juliet, and great speakers, with individual and group discussions.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "English 9 Literature (literature)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const basicComposition = new Class(
    false,
    "English",
    "10",
    "None",
    "Semester",
    "Both",
    "None",
    "Improves grammar, punctuation, and writing conventions through the writing process. Students write expository, comparison/contrast, and argumentative papers.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Basic Composition (writing)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const creativeWriting10 = new Class(
    false,
    "English",
    "10",
    "None",
    "Semester",
    "Both",
    "None",
    "Introduces fiction, poetry, and song lyric writing. Includes workshops, feedback, and publication preparation for an authentic audience.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Creative Writing (writing)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const mythologyFantasyFolklore = new Class(
    false,
    "English",
    "10",
    "None",
    "Semester",
    "Both",
    "None",
    "Explores global storytelling traditions, author’s craft, and cultural purpose. Possible texts: Norse Mythology, The Hobbit, A Wizard of Earthsea.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Mythology, Fantasy, Folklore (literature)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const surveyOfLiterature10 = new Class(
    false,
    "English",
    "10",
    "None",
    "Semester",
    "Both",
    "None",
    "Students choose books of literary merit to improve reading stamina and analysis skills, preparing for AP Lit, college, and lifelong reading.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Survey of Literature (10th) (literature)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const americanLiterature = new Class(
    false,
    "English",
    "10",
    "None",
    "Full Year",
    "Both",
    "None",
    "Covers American literature from colonization to present. Fall: nonfiction & rhetoric; Spring: literary analysis. Strongly suggested before AP English.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "American Literature (writing & literature)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const speech = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Teaches public speaking and communication through expository, persuasive, and demonstrative speeches, with focus on research, style, and critique.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Speech (writing)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const multimediaComposition = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Spring",
    "None",
    "Combines media analysis with creation of blogs, podcasts, videos, and digital images. Emphasizes critical thinking about purpose, form, and content.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Multimedia Composition (writing)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const introToJournalism = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Fall",
    "None",
    "Project-based course on news, features, and opinion writing. Involves pitching ideas, research, drafting, revising, and publication in the school paper.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Journalism (writing)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const activismAndSocialJusticeLit = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Examines literature tied to social justice movements. Topics include race, gender, environment, and human rights, with emphasis on critical analysis.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Activism & Social Justice Lit. (literature)", // className
    [], // grades
    [], //classDifficulty 
    [] // tags
);



const horrorLiterature = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Analyzes symbolism and cultural roles of horror literature. Includes creative writing, research, and analysis of texts like Frankenstein and The Shining.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Horror Literature (literature)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const scienceFictionLiterature = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Studies science fiction across eras and subgenres, connecting science and literature through creative, analytical, and informational writing.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Science-Fiction Literature (literature)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const shakespeare = new Class(
    false,
    "English",
    "11, 12",
    "None",
    "Semester",
    "Both",
    "None",
    "Covers Shakespeare’s sonnets and plays from comedy, tragedy, and history. Focuses on critical thinking, textual analysis, and performance activities.",
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Shakespeare (literature)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const surveyOfLiterature12 = new Class(
    false, // dualCredit
    "English", // subject
    "12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Student-selected literary works to build stamina and advanced analysis (character, setting, structure, POV, imagery, figurative language). Meets Iowa Core 11–12 Literacy standards and prepares for AP, college, and lifelong reading.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Survey of Literature (12th) (Literature)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const drama = new Class(
    false, // dualCredit
    "English", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Explores theater through major plays/playwrights, acting and directing techniques, and stagecraft basics (set, lighting, sound). Includes improvisation and scene interpretation.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Drama", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedJournalism = new Class(
    false, // dualCredit
    "English", // subject
    "10, 11, 12", // usualGrade
    "Introduction to Journalism or Multimedia Composition", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Motivated composition course producing The WEB (AHS newspaper). Student editors assign/edit news, features, and opinion; integrate interviews and research; create publishable stories, columns, and critiques as independent digital communicators.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Adv. Journalism (AHS Newspaper – The Web)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const spiritYearbook = new Class(
    false, // dualCredit
    "English", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Produces the school yearbook: reporting, captions, photography, page layout, Photoshop, advertising, and deadline-driven production. May require after-school/summer work; emphasizes creativity and teamwork.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "SPIRIT (AHS Yearbook)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const americanSocietyThroughFilm_HUM121 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Semester Literature & Humanities", // Semester Offered
    "None", // honorsAP
    "Dual AHS English & Sociology credit plus DMACC HUM121. Analyzes American culture through film; applies sociological lenses; emphasizes critical viewing, discussion, and written critique in a two-period daily block format.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "American Society Through Film* (HUM 121)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apEnglishLanguageAndComposition_ENG105_106 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level rhetoric/writing course focusing on rhetorical analysis of nonfiction and evidence-centered argumentative writing. Daily reading/writing; prepares for AP exam and earns DMACC Comp I & II (ENG 105/106) credit; must be taken for DMACC credit.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP English Language & Composition* (ENG 105 & 106) – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apEnglishLiteratureAndComposition_LIT101_185 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level study of literature, poetry, and drama with AP preparation; includes required summer reading. Meets DMACC Lit 101 & 185 requirements while cultivating advanced literary analysis and critical writing.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP English Literature & Composition* (Lit 101 & 185) – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedCreativeWriting_ENG221 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Semester writing", // Semester Offered
    "None", // honorsAP
    "Advanced workshop in fiction, poetry, and lyrics. Emphasizes critique, revision, reading professional models, and preparing polished work for publication for an authentic audience (DMACC ENG221 credit).", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Creative Writing (11-12)* (ENG221) – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const worldLiterature2_LIT151 = new Class(
    true, // dualCredit
    "English", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Semester literature", // Semester Offered
    "None", // honorsAP
    "Examines enduring human values across global literary traditions. Possible readings include The Kite Runner, One Hundred Years of Solitude, and Things Fall Apart (DMACC LIT151; offered 26–27).", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "World Literature 2* (LIT 151) (Offered 26-27) – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);

const introductionToHumanServices = new Class(
    false, // dualCredit
    "humanservices", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduces careers and opportunities in humanservices supporting individuals and families. Topics include career prep, family, parenting, money management, decision-making, communication, nutrition, and roles in family, community, and workforce.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Introduction to Human Services", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const lifespanNutritionAndWellness = new Class(
    false, // dualCredit
    "humanservices", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Laboratory course applying lifetime wellness and nutrition principles for informed personal choices and careers in hospitality, education, humanservices, and health sciences.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Lifespan Nutrition and Wellness", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const childDevelopment1 = new Class(
    false, // dualCredit
    "humanservices", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers child growth and development from conception to age one, including childcare practices and parenting. Introduces education/training requirements for early childhood career paths.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Child Development I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const childDevelopment2 = new Class(
    false, // dualCredit
    "humanservices", // subject
    "10, 11, 12", // usualGrade
    "Child Development I", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Focuses on child growth and development ages 2–8, including guidance techniques, developmental milestones, and child-related issues. May include observations, hands-on activities, and lab work.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Child Development II", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const earlyChildhoodEducation1 = new Class(
    false, // dualCredit
    "humanservices", // subject
    "10, 11, 12", // usualGrade
    "Child Development II", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduces careers in early childhood education through observational experiences and learning about foundational practices, teacher traits, and aptitudes for quality education.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Early Childhood Education I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const earlyChildhoodEducation2 = new Class(
    false, // dualCredit
    "humanservices", // subject
    "10, 11, 12", // usualGrade
    "Early Childhood Education I", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Continues preparation for child education careers with skills in communication, developmental observation, problem-solving, and activity planning. Includes weekly lab work with young children.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Early Childhood Education II", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const earlyChildhoodEducation3 = new Class(
    false, // dualCredit
    "humanservices", // subject
    "11, 12", // usualGrade
    "Early Childhood Education II", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Hands-on experience in a professional child lab setting. Involves demonstrating employment skills, maintaining a healthy environment, implementing curriculum, and fostering positive relationships with children.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Early Childhood Education III – Field Experience", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const internshipProgram_HumanServices = new Class(
    true, // dualCredit
    "humanservices", // subject
    "11, 12", // usualGrade
    "Instructor Approval Required", // prerequisite
    "Semester (2-period block)", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Internship 1: Semester-long unpaid placement with an employer based on application and interests. Highly independent with focus on initiative and professionalism. Internship 2: Builds on Internship 1 with further career exploration and advanced skills.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Internship Program (Internship 1 & Internship 2) – Dual Credit Courses", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advertising = new Class(
    false, // dualCredit
    "informationsolutions", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers history and development of advertising, industry standards, and career opportunities. Students use web-based software to create creative marketing materials.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advertising", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const videoProduction = new Class(
    false, // dualCredit
    "informationsolutions", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Explores video production history, industry standards, and career opportunities. Students develop skills in various aspects of production using art, design, and technology integration.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Video Production", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const webDesign = new Class(
    false, // dualCredit
    "informationsolutions", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers history, standards, and career paths in web design. Students gain hands-on skills using elements of art, principles of design, and technology integration for web development.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Web Design", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const microsoftCertification = new Class(
    true, // dualCredit
    "informationsolutions", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Prepares students for official Microsoft Word and Excel certification through business simulations. Credentials can be added to resumes, college, job, and scholarship applications.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Microsoft Certification* – Dual Credit Course", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);

const algebra1AB = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Interpret the structure of expressions, create equations that describe numbers or relationships. Understand solving equations as a process of reasoning and explain the reasoning. Solve equations and inequalities in one variable. Represent and solve equations and inequalities graphically. Understand the concept of a function and use function notation. Interpret functions that arise in applications in terms of the context. Interpret linear models. Scientific calculator required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Algebra 1AB", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const algebra1 = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "The description of the essential standards of this course are those of Algebra 1AB. These standards will be expanded upon and at times be covered at a faster pace. Students wishing to pursue a program of study/career related to mathematics should enroll in this course. Scientific calculator required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Algebra 1*", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const geometryAB = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "Algebra 1AB or Algebra 1", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Understand congruence in terms of rigid motions. Prove geometric theorems. Define trigonometric ratios and solve problems involving right triangles. Use coordinates to prove simple geometric theorems algebraically. Apply geometric concepts in modeling situations. Scientific calculator, protractor, compass, ruler required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Geometry AB", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const geometry = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "Algebra 1AB or Algebra 1", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers Geometry AB content at a faster pace and greater depth. Recommended for students pursuing advanced mathematics. Requires scientific calculator, protractor, compass, ruler.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Geometry", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const algebra2 = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "11, 12", // usualGrade
    "Algebra 1AB or Algebra 1, Geometry AB or Geometry", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Extend the properties of exponents to rational exponents. Interpret the structure of expressions. Write expressions in equivalent forms to solve problems. Perform arithmetic operations on polynomials. Understand the relationship between zeros and factors of polynomials. Understand solving equations as a process of reasoning and explain the reasoning. Represent and solve equations and inequalities graphically. Interpret functions that arise in applications in terms of the context. Build a function that models a relationship between two quantities.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Algebra 2", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);

const advancedAlgebra2 = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "9, 10, 11, 12", // usualGrade
    "Algebra 1AB or Algebra 1, Geometry AB or Geometry", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Topics from the Common Core Curriculum will be covered but explored in greater depth and detail than in Algebra 2. Includes sequences and series, quadratic functions, fractional exponents, roots, and logarithms. Strongly recommended for students who will take Pre-Calculus the following year. Graphing calculator required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Algebra 2", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const computerScience = new Class(
    false, // dualCredit
    "Mathematics", // subject
    "10, 11, 12", // usualGrade
    "Sophomore or higher grade level", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Covers computer science fundamentals including history of computers, program organization, control structures, classes, encapsulation, inheritance, Boolean logic, arrays, strings, algorithms, file I/O, and intermediate graphics. Emphasizes problem solving.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Computer Science", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const statistics = new Class(
    true, // dualCredit
    "Mathematics", // subject
    "11, 12", // usualGrade
    "Algebra 2 or Advanced Algebra 2", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "College-level course in data collection, organization, analysis, interpretation, and presentation. Includes hypothesis testing and real-world applications. Emphasizes critical thinking and problem solving. Graphing calculator required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Statistics (MAT 157)", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const preCalculus = new Class(
    true, // dualCredit
    "Mathematics", // subject
    "11, 12", // usualGrade
    "Algebra 2 or Advanced Algebra 2", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "College-level course combining algebra and geometry to prepare for calculus. Covers trigonometric identities, graphs, triangle solutions, and circular function modeling. Graphing calculator required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Pre-Calculus (MAT 129)", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const apCalculusAB = new Class(
    true, // dualCredit
    "Mathematics", // subject
    "11, 12", // usualGrade
    "Pre-Calculus", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "AP Calculus AB prepares students for the AP Exam in Calculus AB. Covers limits, derivatives, integrals, and the Fundamental Theorem of Calculus. Requires strong algebra, trig, and Pre-Calculus skills. Graphing calculator required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP Calculus (AB) (MAT 211)", // className
    [], // grades
    [], // classDifficulty
    [] // tags
);



const freshmanBand9 = new Class(
    false, // dualCredit
    "Music", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Includes all 9th grade band members; each student has a weekly lesson. Students registered for Freshman Band participate in Marching Band, which functions as a marching unit during the first quarter.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Freshman Band (9)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const concertBandFall = new Class(
    false, // dualCredit
    "Music", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Students are placed into Wind Symphony / Symphonic Band or Concert Band based on progress and ability; Wind Symphony/Symphonic placement is by audition in September during marching season. Marching Band includes students in Wind Symphony, Symphonic Band, and Concert Band and functions as a marching unit during the first quarter. Weekly lessons are required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Concert Band (Fall)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const percussionTechniques = new Class(
    false, // dualCredit
    "Music", // subject
    "10", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Sophomores perform on keyboard percussion with the marching band during the fall and perform as a percussion ensemble at the Holiday Concert. Each student also has a weekly lesson.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Percussion Techniques", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const concertBandSpring = new Class(
    false, // dualCredit
    "Music", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Students are placed into Wind Symphony / Symphonic Band or Concert Band in the spring based on progress and ability; Wind Symphony/Symphonic placement is by audition in September during marching season. Marching Band includes students in Wind Symphony, Symphonic Band, and Concert Band and functions as a marching unit during the first quarter. Weekly lessons are required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Concert Band (Spring)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const windSymphonySymphonicBand = new Class(
    false, // dualCredit
    "Music", // subject
    "10, 11, 12", // usualGrade
    "Audition / Director Placement", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "10–12 students are divided into Wind Symphony, Symphonic Band, and Concert Band. Spring placement is based on progress/ability; Wind Symphony and Symphonic Band require an audition in September during marching season. Marching Band includes these ensembles and functions as a marching unit during the first quarter. Weekly lessons are required.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Wind Symphony / Symphonic Band*", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const twirler = new Class(
    false, // dualCredit
    "Music", // subject
    "10, 11, 12", // usualGrade
    "Director Selection", // prerequisite
    "Quarter", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Feature Twirler is selected in the spring. Students must design routines to music provided by the band director and demonstrate understanding and application of baton fundamentals within their routines.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Twirler (10-12)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const freshmanChoir = new Class(
    false, // dualCredit
    "Music", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Open to all ninth graders; no experience or audition required. The choir meets daily and each student also has a weekly lesson.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Freshman Choir", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const concertChoir = new Class(
    false, // dualCredit
    "Music", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Open to grades 10–12 with no experience or audition required. Choir meets daily and each student also has a weekly lesson.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Concert Choir", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const concertChorale = new Class(
    false, // dualCredit
    "Music", // subject
    "10, 11, 12", // usualGrade
    "Audition", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "AHS auditioned large ensemble for grades 10–12. Auditions are held in January for the following year; new students should see the director for audition information.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Concert Chorale*", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const freshmanOrchestra9 = new Class(
    false, // dualCredit
    "Music", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Open to 9th grade students and performs at most concerts. Focuses on tone production, intonation, rhythm, articulation, dynamics, and expression, with foundational music literacy through music theory study.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Freshman Orchestra (9)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const symphonyOrchestra = new Class(
    false, // dualCredit
    "Music", // subject
    "10, 11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Develops advanced technique, musicianship, style, and knowledge of music history and theory through study and performance of advanced orchestral literature. Performs at all AHS concerts and throughout the community.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Symphony Orchestra (10-12)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const chamberOrchestra = new Class(
    false, // dualCredit
    "Music", // subject
    "10, 11, 12", // usualGrade
    "Audition", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Open to orchestra members in grades 10–12 by audition. Requires mastery-level scales and playing tests. Students learn a large, varied repertoire and perform in full ensemble and smaller groups throughout the community.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Chamber Orchestra* (10-12)", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const aquatics = new Class(
    false, // dualCredit
    "PE", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Students gain awareness of water safety and learn skills for being safe in, on, and around water. Focus includes refinement of strokes, coordination, flexibility, cardiovascular fitness, muscular strength, endurance, and body composition.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Aquatics", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const lifeguardingWSI = new Class(
    false, // dualCredit
    "PE", // subject
    "10, 11, 12", // usualGrade
    "Must be 15+ yrs and meet swimming prerequisites", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Covers Red Cross certification in Lifeguarding and WSI. Students must demonstrate swimming prerequisites including swimming 300 yards, treading water, surface diving, and object retrieval. Skills tested on first day—failure results in drop from class.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Lifeguarding/WSI*", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const unifiedPE = new Class(
    false, // dualCredit
    "PE", // subject
    "9, 10, 11, 12", // usualGrade
    "Instructor Approval Required", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Combined General and Adapted PE class focused on recreation, fitness, and adapted athletics. Students participate in sports and fitness activities, modifying for others as needed, and engage in roles such as coach, official, coordinator, and athlete. Requires application, interview, and acceptance.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Unified PE", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const weights1 = new Class(
    false, // dualCredit
    "PE", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory lifting course focused on proper techniques, core strength, flexibility, and safety in the weight room. Required for all 9th graders or any student taking weights for the first time at Ames High. Not recommended for current athletes already in lifting programs.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Weights I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const weights2 = new Class(
    false, // dualCredit
    "PE", // subject
    "10, 11, 12", // usualGrade
    "Weights I", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Focused on continued development in weight training, strength, and flexibility. Students set individual goals, refine form and function, and learn to design workouts for long-term fitness. Not recommended for athletes already in lifting programs.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Weights II", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const outdoorRecreation = new Class(
    false, // dualCredit
    "PE", // subject
    "11, 12", // usualGrade
    "Junior or Senior standing", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Elective PE course emphasizing outdoor activities, fitness, leadership, and appreciation for nature. Activities may include golf, hiking, archery, rock climbing, camping, canoeing, survival skills, and emergency preparedness.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Outdoor Recreation", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const teamGamesSports = new Class(
    false, // dualCredit
    "PE", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Covers rules, skills, fundamentals, and strategies across a wide variety of team activities. Students explore roles such as trainer, coach, player, and manager. Sports include lacrosse, field hockey, ultimate games, rugby, basketball, broomball, and more. Safety and sportsmanship emphasized.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Team Games/Sports", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const lifetimeActivities = new Class(
    false, // dualCredit
    "PE", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Focuses on lifetime leisure and wellness activities such as golf, disc golf, pickleball, bowling, sand volleyball, yoga, spikeball, jogging, and ping pong. Promotes physical literacy and lifelong wellness skills.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Lifetime Activities", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const innovationFitness = new Class(
    false, // dualCredit
    "PE", // subject
    "9, 10, 11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Helps students create goals for healthier lifestyles with lower-impact fitness options. Activities include yoga, aerobics, data-tracking fitness tech, Bosu-trainers, jump roping, kickboxing, medicine balls, and resistance training.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Innovation Fitness: Individual Performance PE", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const earthAndSpaceScience = new Class(
    false, // dualCredit
    "Science", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Required for graduation. Emphasizes Earth’s place in the universe, Earth’s systems, and human impact on Earth. Topics include planetary motion, gravity, watersheds, hydrosphere, atmosphere, biosphere, climate systems, and climate change.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Earth and Space Science", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const biology = new Class(
    false, // dualCredit
    "Science", // subject
    "10", // usualGrade
    "Earth and Space Science", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Explores life sciences: survival, growth, reproduction, genetics, natural selection, and ecosystems. Includes both classroom and field-based experiences with project-based applications of biology concepts.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Biology", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const physicalScience = new Class(
    false, // dualCredit
    "Science", // subject
    "11", // usualGrade
    "Earth and Space Science; Biology", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introduces physics and chemistry concepts with lab and discussion. Topics include motion, momentum, forces, energy, electricity, magnetism, gravitation, atomic theory, reactions, stoichiometry, and acids/bases.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Physical Science", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const physics = new Class(
    false, // dualCredit
    "Science", // subject
    "11, 12", // usualGrade
    "Earth and Space Science; Biology", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Focuses on matter and energy interactions through labs and discussions. Topics include motion, forces, energy, momentum, waves, electricity, magnetism, and gravitation.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Physics", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const chemistry = new Class(
    false, // dualCredit
    "Science", // subject
    "11, 12", // usualGrade
    "Earth and Space Science; Biology", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Explores matter and energy interactions with labs and discussions. Topics include kinetic molecular theory, heat, periodic table, mole, stoichiometry, atomic theory, reactions, solutions, kinetics, and acids/bases.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Chemistry", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apBiology = new Class(
    true, // dualCredit
    "Science", // subject
    "11, 12", // usualGrade
    "Earth and Space Science; Biology; Chemistry", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level course emphasizing inquiry-based biology. Topics include evolution, energy processes, genetics, information transfer, ecology, and interactions. Students conduct labs and projects aligned with AP Biology standards.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP Biology*", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apPhysics = new Class(
    true, // dualCredit
    "Science", // subject
    "11, 12", // usualGrade
    "Earth and Space Science; Biology; Physics; Geometry", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level algebra-based physics course. Topics include motion, forces, energy, momentum, rotations, oscillations, and fluids. Includes inquiry-based investigations and preparation for the AP Physics exam.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP Physics*", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apChemistry = new Class(
    true, // dualCredit
    "Science", // subject
    "11, 12", // usualGrade
    "Earth and Space Science; Biology; Chemistry", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level chemistry course covering atomic/molecular structure, reactions, kinetics, equilibrium, and thermodynamics. Includes inquiry-based labs aligned with AP Chemistry standards.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP Chemistry*", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedPhysics = new Class(
    false, // dualCredit
    "Science", // subject
    "12", // usualGrade
    "Physics", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Culminating senior course continuing physics topics. Completes a full year of physics for students who began earlier coursework.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Physics", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const advancedChemistry = new Class(
    false, // dualCredit
    "Science", // subject
    "12", // usualGrade
    "Chemistry", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Culminating senior course continuing chemistry topics, designed for Class of 2026 only. Completes a full year of chemistry for students who began earlier coursework.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Advanced Chemistry", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const honorsWorldStudies = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "Honors", // honorsAP
    "Optional replacement for World Studies. Provides greater depth and breadth in regional studies, with regular homework including readings, book assignments, and essays.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Honors World Studies", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const worldStudies = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Required course examining geography, history, and economics of world regions, from early civilizations to modern-day issues.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "World Studies", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apUSHistory = new Class(
    true, // dualCredit
    "SocialStudies", // subject
    "10", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "Optional replacement for U.S. History. A college-level survey from 1491 to the present. Emphasizes historical thinking, analytical writing, and primary source analysis with a rigorous reading load.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP US History", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const usHistory = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "10", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Required U.S. History course taught thematically, covering migration, democracy, civil rights, economic trends, war, conflict, and identity.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "US History", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apPsychology = new Class(
    true, // dualCredit
    "SocialStudies", // subject
    "11, 12", // usualGrade
    "Sociology or AP Psychology", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level course introducing human behavior, mental processes, and therapy. Covers many psychology topics quickly with lecture, discussion, experiments, and demonstrations. Daily reading expected.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP Psychology", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apEuropeanHistory = new Class(
    true, // dualCredit
    "SocialStudies", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "College-level course beginning with the Renaissance (1450) and tracing European economic, social, cultural, and diplomatic history to the present. Emphasizes historical thinking, analysis, and writing.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP European History", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const westernCiv1 = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Fall", // Semester Offered
    "None", // honorsAP
    "Survey of European influence from Greek and Roman traditions through Renaissance developments. Focuses on religion, culture, and scientific advancements.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Western Civilization I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const westernCiv2 = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Spring", // Semester Offered
    "None", // honorsAP
    "Survey of European influence from absolute monarchies through WWII. Covers democratic ideals, religious traditions, economic principles, and social change via conflict.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Western Civilization II", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const sociology = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "11, 12", // usualGrade
    "Sociology or AP Psychology", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Discussion-based course examining social life, social change, and the causes and consequences of human behavior. Includes field study activities.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Sociology", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const economics = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Studies micro and macroeconomics: how societies use limited resources to satisfy needs and wants. Increases awareness of economic systems and real-world issues.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Economics", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const nonWesternWorld = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Broad overview of Native America, Africa, Japan, and the Middle East. Focuses on cultural characteristics including language, food, customs, values, and material objects.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Non-Western World", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const worldIssues = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "11, 12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Helps students develop skills to analyze and understand current issues such as human rights, environmental challenges, and world governance.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "World Issues", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const apUSGovernment = new Class(
    true, // dualCredit
    "SocialStudies", // subject
    "12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "AP", // honorsAP
    "Optional replacement for U.S. Government. College-level course covering U.S. political systems, ideology, elections, parties, courts, and policymaking. Emphasizes American political ideals and high-level discussions.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "AP US Government", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const usGovernment = new Class(
    false, // dualCredit
    "SocialStudies", // subject
    "12", // usualGrade
    "None", // prerequisite
    "Semester", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Required U.S. Government course covering Constitution, branches of government, media, elections, political parties, and policy-making.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "US Government", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



// FRENCH

const french1 = new Class(
    false, // dualCredit
    "Language", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory French for beginners. Focuses on listening and reading comprehension, high-frequency vocabulary, and basic language patterns. Students begin to respond in words or simple sentences and develop foundational speaking and writing.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "French I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const french2 = new Class(
    false, // dualCredit
    "Language", // subject
    "10", // usualGrade
    "French I", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Intermediate French for students completing French I. Emphasizes comprehension, vocabulary expansion, spontaneous speaking, and additional writing practice.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "French II", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const french3 = new Class(
    false, // dualCredit
    "Language", // subject
    "11", // usualGrade
    "French II", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced-intermediate French. Students acquire more complex structures, practice spontaneous speech, improve confidence in speaking and writing, and develop fluency in listening and reading.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "French III", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const french4 = new Class(
    false, // dualCredit
    "Language", // subject
    "12", // usualGrade
    "French III", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced French. Students refine comprehension, differentiate tenses, and sustain conversations using complex sentence structures. Emphasis on fluency, literacy, and cultural understanding.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "French IV", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



// GERMAN

const german1 = new Class(
    false, // dualCredit
    "Language", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory German for beginners. Focuses on listening and reading comprehension, high-frequency vocabulary, and basic language patterns. Students begin responding with simple words or sentences and build foundational skills.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "German I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const german2 = new Class(
    false, // dualCredit
    "Language", // subject
    "10", // usualGrade
    "German I", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Intermediate German course following German I. Focuses on improved comprehension, vocabulary, spontaneous speaking, and more complex writing skills.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "German II", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const german3 = new Class(
    false, // dualCredit
    "Language", // subject
    "11", // usualGrade
    "German II", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced-intermediate German. Emphasis on using more spontaneous and complex structures in speaking and writing, with stronger fluency in comprehension and production.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "German III", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const german4 = new Class(
    false, // dualCredit
    "Language", // subject
    "12", // usualGrade
    "German III", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced German course focusing on fluency, literacy, grammar refinement, cultural studies, and conversational skills across tenses. Emphasis on sustained dialogue and comprehension.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "German IV", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



// SPANISH

const spanish1 = new Class(
    false, // dualCredit
    "Language", // subject
    "9", // usualGrade
    "None", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Introductory Spanish for beginners. Focus on listening and reading comprehension, high-frequency vocabulary, and basic language patterns. Students respond in simple words/sentences and begin producing language.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Spanish I", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const spanish2 = new Class(
    false, // dualCredit
    "Language", // subject
    "10", // usualGrade
    "Spanish I", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Intermediate Spanish building from Spanish I. Students expand comprehension, vocabulary, and begin more spontaneous speaking and writing while developing cultural awareness.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Spanish II", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const spanish3 = new Class(
    false, // dualCredit
    "Language", // subject
    "11", // usualGrade
    "Spanish II", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced-intermediate Spanish. Expands vocabulary and structures for more complex communication. Focus on improving fluency and confidence in listening, reading, speaking, and writing.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Spanish III", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const spanish4 = new Class(
    false, // dualCredit
    "Language", // subject
    "12", // usualGrade
    "Spanish III", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "Advanced Spanish. Students refine grammar, distinguish tenses, expand fluency, and engage in sustained dialogue. Emphasis on cultural understanding and advanced literacy.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Spanish IV", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const heritageSpanish = new Class(
    false, // dualCredit
    "Language", // subject
    "9, 10, 11, 12", // usualGrade
    "Home language Spanish", // prerequisite
    "Full Year", // duration
    "Both", // Semester Offered
    "None", // honorsAP
    "For students whose home language is Spanish. Focuses on improving literacy (reading and writing) and overall fluency. Includes study of diverse Spanish-speaking cultures.", // description
    [], // ratings
    [], // comments
    [], // averageTimePerWeek
    "calculate", // icon
    "Heritage Spanish", // className
    [], // grades
    [], //classDifficulty
    [] // tags
);



const courseMap = new Map();



courseMap.set(manufacturingAndWelding.getCourseId(), manufacturingAndWelding);

courseMap.set(AdvancedPlantScience.getCourseId(), AdvancedPlantScience);

courseMap.set(activismAndSocialJusticeLit.getCourseId(), activismAndSocialJusticeLit);

courseMap.set(introductionToHumanServices.getCourseId(), introductionToHumanServices);

courseMap.set(physicalScience.getCourseId(), physicalScience);

courseMap.set(businessEngagementCollaborative.getCourseId(), businessEngagementCollaborative);

courseMap.set(itecContractAdvancedTechnology.getCourseId(), itecContractAdvancedTechnology);

courseMap.set(AgricultureFoodAndNaturalResources.getCourseId(), AgricultureFoodAndNaturalResources);

courseMap.set(german1.getCourseId(), german1);

courseMap.set(advancedGraphicDesign.getCourseId(), advancedGraphicDesign);

courseMap.set(english9Workshop.getCourseId(), english9Workshop);

courseMap.set(ComputerAidedManufacturing.getCourseId(), ComputerAidedManufacturing);

courseMap.set(computerScience.getCourseId(), computerScience);

courseMap.set(apUSHistory.getCourseId(), apUSHistory);

courseMap.set(percussionTechniques.getCourseId(), percussionTechniques);

courseMap.set(AgriculturalBusinessFoundation.getCourseId(), AgriculturalBusinessFoundation);

courseMap.set(AgriculturalPowerAndTechnology.getCourseId(), AgriculturalPowerAndTechnology);

courseMap.set(spanish4.getCourseId(), spanish4);

courseMap.set(americanLiterature.getCourseId(), americanLiterature);

courseMap.set(english9Literature.getCourseId(), english9Literature);

courseMap.set(advancedManufacturingAndWelding.getCourseId(), advancedManufacturingAndWelding);

courseMap.set(earthAndSpaceScience.getCourseId(), earthAndSpaceScience);

courseMap.set(usHistory.getCourseId(), usHistory);

courseMap.set(carpentry2.getCourseId(), carpentry2);

courseMap.set(marketingAndSelling.getCourseId(), marketingAndSelling);

courseMap.set(french2.getCourseId(), french2);

courseMap.set(biology.getCourseId(), biology);

courseMap.set(apEnglishLanguageAndComposition_ENG105_106.getCourseId(), apEnglishLanguageAndComposition_ENG105_106);

courseMap.set(engineeringCADDDrafting.getCourseId(), engineeringCADDDrafting);

courseMap.set(scienceFictionLiterature.getCourseId(), scienceFictionLiterature);

courseMap.set(innovationFitness.getCourseId(), innovationFitness);

courseMap.set(businessAndPersonalLaw.getCourseId(), businessAndPersonalLaw);

courseMap.set(french1.getCourseId(), french1);

courseMap.set(advancedDrawingPaintingPrintmaking.getCourseId(), advancedDrawingPaintingPrintmaking);

courseMap.set(apEnglishLiteratureAndComposition_LIT101_185.getCourseId(), apEnglishLiteratureAndComposition_LIT101_185);

courseMap.set(introductionToManufacturing.getCourseId(), introductionToManufacturing);

courseMap.set(AdvancedAnimalScience.getCourseId(), AdvancedAnimalScience); 

courseMap.set(unifiedPE.getCourseId(), unifiedPE); 

courseMap.set(internshipProgramBusiness.getCourseId(), internshipProgramBusiness); 

courseMap.set(spanish3.getCourseId(), spanish3); 

courseMap.set(weights2.getCourseId(), weights2); 

courseMap.set(FoodScienceAndSafety.getCourseId(), FoodScienceAndSafety); 

courseMap.set(shakespeare.getCourseId(), shakespeare); 

courseMap.set(introductionToBusiness.getCourseId(), introductionToBusiness); 

courseMap.set(spanish1.getCourseId(), spanish1); 

courseMap.set(concertBandSpring.getCourseId(), concertBandSpring); 

courseMap.set(AnimalScience.getCourseId(), AnimalScience); 

courseMap.set(carpentry1.getCourseId(), carpentry1); 

courseMap.set(personalFinance.getCourseId(), personalFinance); 

courseMap.set(heritageSpanish.getCourseId(), heritageSpanish); 

courseMap.set(preCalculus.getCourseId(), preCalculus); 

courseMap.set(PlantScience.getCourseId(), PlantScience); 

courseMap.set(advancedJournalism.getCourseId(), advancedJournalism); 

courseMap.set(advancedBusinessEngagementCollaborative.getCourseId(), advancedBusinessEngagementCollaborative); 

courseMap.set(german2.getCourseId(), german2); 

courseMap.set(earlyChildhoodEducation2.getCourseId(), earlyChildhoodEducation2); 

courseMap.set(introductionToAgriscience.getCourseId(), introductionToAgriscience); 

courseMap.set(introductiontoCarpentry.getCourseId(), introductiontoCarpentry); 

courseMap.set(german3.getCourseId(), german3); 

courseMap.set(multimediaComposition.getCourseId(), multimediaComposition); 

courseMap.set(earlyChildhoodEducation3.getCourseId(), earlyChildhoodEducation3); 

courseMap.set(spanish2.getCourseId(), spanish2); 

courseMap.set(childDevelopment2.getCourseId(), childDevelopment2); 

courseMap.set(speech.getCourseId(), speech); 

courseMap.set(french4.getCourseId(), french4); 

courseMap.set(advancedCeramics.getCourseId(), advancedCeramics); 

courseMap.set(apEuropeanHistory.getCourseId(), apEuropeanHistory); 

courseMap.set(french3.getCourseId(), french3); 

courseMap.set(horrorLiterature.getCourseId(), horrorLiterature); 

courseMap.set(german4.getCourseId(), german4); 

courseMap.set(internshipProgram1.getCourseId(), internshipProgram1); 

courseMap.set(ceramics1.getCourseId(), ceramics1); 

courseMap.set(nonWesternWorld.getCourseId(), nonWesternWorld); 

courseMap.set(outdoorRecreation.getCourseId(), outdoorRecreation); 

courseMap.set(webDesign.getCourseId(), webDesign); 

courseMap.set(mythologyFantasyFolklore.getCourseId(), mythologyFantasyFolklore); 

courseMap.set(windSymphonySymphonicBand.getCourseId(), windSymphonySymphonicBand); 

courseMap.set(apChemistry.getCourseId(), apChemistry); 

courseMap.set(algebra1AB.getCourseId(), algebra1AB); 

courseMap.set(geometry.getCourseId(), geometry); 

courseMap.set(chemistry.getCourseId(), chemistry); 

courseMap.set(photography1.getCourseId(), photography1); 

courseMap.set(woodworking2.getCourseId(), woodworking2); 

courseMap.set(symphonyOrchestra.getCourseId(), symphonyOrchestra); 

courseMap.set(lifeguardingWSI.getCourseId(), lifeguardingWSI); 

courseMap.set(advancedPhotography.getCourseId(), advancedPhotography); 

courseMap.set(internshipProgram_HumanServices.getCourseId(), internshipProgram_HumanServices); 

courseMap.set(advancedJewelry.getCourseId(), advancedJewelry); 

courseMap.set(introToJournalism.getCourseId(), introToJournalism); 

courseMap.set(physics.getCourseId(), physics); 

courseMap.set(videoProduction.getCourseId(), videoProduction); 

courseMap.set(statistics.getCourseId(), statistics); 

courseMap.set(westernCiv2.getCourseId(), westernCiv2); 

courseMap.set(lifespanNutritionAndWellness.getCourseId(), lifespanNutritionAndWellness); 

courseMap.set(apUSGovernment.getCourseId(), apUSGovernment); 

courseMap.set(advanced4DArt.getCourseId(), advanced4DArt); 

courseMap.set(basicComposition.getCourseId(), basicComposition); 

courseMap.set(lifetimeActivities.getCourseId(), lifetimeActivities); 

courseMap.set(foundationsOf4DArt.getCourseId(), foundationsOf4DArt); 

courseMap.set(freshmanChoir.getCourseId(), freshmanChoir); 

courseMap.set(concertChoir.getCourseId(), concertChoir); 

courseMap.set(concertBandFall.getCourseId(), concertBandFall); 

courseMap.set(earlyChildhoodEducation1.getCourseId(), earlyChildhoodEducation1); 

courseMap.set(apPhysics.getCourseId(), apPhysics); 

courseMap.set(advertising.getCourseId(), advertising); 

courseMap.set(drama.getCourseId(), drama); 

courseMap.set(NaturalResources.getCourseId(), NaturalResources); 

courseMap.set(spiritYearbook.getCourseId(), spiritYearbook); 

courseMap.set(accounting2.getCourseId(), accounting2); 

courseMap.set(worldStudies.getCourseId(), worldStudies); 

courseMap.set(honorsWorldStudies.getCourseId(), honorsWorldStudies); 

courseMap.set(foundationsOf2DArt.getCourseId(), foundationsOf2DArt); 

courseMap.set(freshmanBand9.getCourseId(), freshmanBand9); 

courseMap.set(advanced3DArt.getCourseId(), advanced3DArt); 

courseMap.set(apBiology.getCourseId(), apBiology); 

courseMap.set(graphicDesign1.getCourseId(), graphicDesign1); 

courseMap.set(internshipProgram2.getCourseId(), internshipProgram2); 

courseMap.set(entrepreneurship1.getCourseId(), entrepreneurship1); 

courseMap.set(freshmanOrchestra9.getCourseId(), freshmanOrchestra9); 

courseMap.set(drawingPaintingPrintmaking.getCourseId(), drawingPaintingPrintmaking); 

courseMap.set(concertChorale.getCourseId(), concertChorale); 

courseMap.set(accounting1.getCourseId(), accounting1); 

courseMap.set(sociology.getCourseId(), sociology); 

courseMap.set(advancedPhysics.getCourseId(), advancedPhysics); 

courseMap.set(advancedAlgebra2.getCourseId(), advancedAlgebra2); 

courseMap.set(advancedCreativeWriting_ENG221.getCourseId(), advancedCreativeWriting_ENG221); 

courseMap.set(aquatics.getCourseId(), aquatics); 

courseMap.set(surveyOfLiterature12.getCourseId(), surveyOfLiterature12); 

courseMap.set(worldLiterature2_LIT151.getCourseId(), worldLiterature2_LIT151); 

courseMap.set(economics.getCourseId(), economics); 

courseMap.set(jewelry1.getCourseId(), jewelry1); 

courseMap.set(foundationsOf3DArt.getCourseId(), foundationsOf3DArt); 

courseMap.set(chamberOrchestra.getCourseId(), chamberOrchestra); 

courseMap.set(westernCiv1.getCourseId(), westernCiv1); 

courseMap.set(AgResearchAndDevelopmentCapstone.getCourseId(), AgResearchAndDevelopmentCapstone); 

courseMap.set(creativeWriting10.getCourseId(), creativeWriting10); 

courseMap.set(teamGamesSports.getCourseId(), teamGamesSports); 

courseMap.set(advancedChemistry.getCourseId(), advancedChemistry); 

courseMap.set(twirler.getCourseId(), twirler); 

courseMap.set(americanSocietyThroughFilm_HUM121.getCourseId(), americanSocietyThroughFilm_HUM121); 

courseMap.set(apCalculusAB.getCourseId(), apCalculusAB); 

courseMap.set(childDevelopment1.getCourseId(), childDevelopment1); 

courseMap.set(contractWoodworking.getCourseId(), contractWoodworking); 

courseMap.set(weights1.getCourseId(), weights1); 

courseMap.set(entrepreneurship3.getCourseId(), entrepreneurship3); 

courseMap.set(worldIssues.getCourseId(), worldIssues); 

courseMap.set(apPsychology.getCourseId(), apPsychology); 

courseMap.set(usGovernment.getCourseId(), usGovernment); 

courseMap.set(microsoftCertification.getCourseId(), microsoftCertification); 

courseMap.set(algebra2.getCourseId(), algebra2); 

courseMap.set(geometryAB.getCourseId(), geometryAB); 

courseMap.set(architecturalCADDDrafting.getCourseId(), architecturalCADDDrafting); 

courseMap.set(entrepreneurship2.getCourseId(), entrepreneurship2); 

courseMap.set(surveyOfLiterature10.getCourseId(), surveyOfLiterature10); 

courseMap.set(woodworking1.getCourseId(), woodworking1); 

courseMap.set(algebra1.getCourseId(), algebra1); 
