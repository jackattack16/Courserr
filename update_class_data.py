#!/usr/bin/env python3
"""
Script to update all class data with more creative and varied comments, grades, difficulties, 
time per week, and ratings for the Courserr application.
"""

import re
import random

# Creative comment sets for different subject areas
COMMENT_SETS = {
    'Agriculture': [
        ["Absolutely loved working with the plants! 🌱", "FFA events were so much fun!", "Teacher makes everything hands-on and interesting", "Learned so much about where my food comes from", "Great intro to agriculture careers"],
        ["The greenhouse projects were amazing! 🌿", "Really opened my eyes to food systems", "Lots of hands-on experiments", "Teacher is super knowledgeable about farming", "Made me want to study agriculture in college"],
        ["Field trips to the forest were incredible! 🌲", "Learned so much about conservation", "Soil testing was actually really cool", "Made me more environmentally conscious", "Great for anyone interested in environmental science"],
        ["Working with the animals was so rewarding! 🐄", "Learned so much about animal behavior", "Dissections were gross but educational", "Perfect for future veterinarians", "Teacher really cares about animal welfare"],
        ["Growing my own vegetables was amazing! 🥕", "Landscaping projects were so creative", "Learned about plant diseases and pests", "Great for future gardeners", "Teacher has a green thumb for sure"],
        ["Cooking experiments were so much fun! 🍳", "Learned why food spoils and how to prevent it", "Food safety is way more complex than I thought", "Great for future chefs or food scientists", "Teacher makes chemistry actually interesting"],
        ["Building and fixing tractors was awesome! 🚜", "Learned so much about engines and mechanics", "Great for future engineers", "Hands-on projects were challenging but fun", "Teacher really knows his stuff about farm equipment"]
    ],
    'CTE': [
        ["Welding was way cooler than I expected! 🔥", "Learned so many practical skills", "Great for future tradespeople", "Safety first - but still fun", "Teacher is a master craftsman"],
        ["CAD design was surprisingly creative! 🎨", "Learned to think in 3D", "Great for future architects or engineers", "Projects were challenging but rewarding", "Teacher really knows the software"],
        ["Woodworking projects turned out amazing! 🪵", "Learned precision and patience", "Great for DIY projects at home", "Teacher has incredible woodworking skills", "Made furniture I'm actually proud of"],
        ["Manufacturing processes are fascinating! ⚙️", "Learned how things are actually made", "Great for understanding industry", "Hands-on learning at its best", "Teacher connects theory to real world"]
    ],
    'Art': [
        ["Art class was my creative escape! 🎨", "Learned so many new techniques", "Great for expressing yourself", "Teacher is incredibly talented", "Projects were always interesting"],
        ["Photography opened my eyes to beauty! 📸", "Learned to see the world differently", "Great for capturing memories", "Teacher has an amazing eye", "Equipment was top-notch"],
        ["Ceramics was surprisingly therapeutic! 🏺", "Learned patience and precision", "Great for stress relief", "Teacher is a true artist", "Made pieces I'm proud to display"],
        ["Graphic design skills are so useful! 💻", "Learned industry-standard software", "Great for future designers", "Projects were creative and challenging", "Teacher knows the business side too"]
    ],
    'Business': [
        ["Business class taught me real-world skills! 💼", "Learned about money management", "Great for future entrepreneurs", "Teacher has actual business experience", "Projects were practical and useful"],
        ["Marketing was surprisingly creative! 📈", "Learned about consumer psychology", "Great for understanding advertising", "Teacher makes it engaging", "Group projects were fun"],
        ["Accounting made math actually useful! 📊", "Learned about financial literacy", "Great for personal finance", "Teacher explains complex concepts well", "Skills I'll use forever"]
    ],
    'English': [
        ["Literature opened my mind to new worlds! 📚", "Learned to analyze and think critically", "Great for improving writing skills", "Teacher makes classics interesting", "Discussions were always engaging"],
        ["Creative writing let me express myself! ✍️", "Learned different writing styles", "Great for building confidence", "Teacher is very encouraging", "Workshop feedback was helpful"],
        ["Shakespeare was way more fun than expected! 🎭", "Learned to appreciate language", "Great for understanding culture", "Teacher makes it accessible", "Performances were memorable"]
    ],
    'Math': [
        ["Math finally clicked for me! 🧮", "Learned problem-solving strategies", "Great for logical thinking", "Teacher explains concepts clearly", "Practice problems were helpful"],
        ["Algebra was challenging but rewarding! 📐", "Learned to think systematically", "Great foundation for future math", "Teacher is very patient", "Tutoring sessions were valuable"],
        ["Calculus opened up new possibilities! 📊", "Learned advanced problem-solving", "Great for STEM majors", "Teacher makes it understandable", "Applications were interesting"]
    ],
    'Science': [
        ["Biology lab experiments were fascinating! 🧬", "Learned about life processes", "Great for future health careers", "Teacher makes complex topics clear", "Dissections were educational"],
        ["Chemistry reactions were amazing! ⚗️", "Learned about matter and energy", "Great for understanding the world", "Teacher explains safety well", "Lab reports improved my writing"],
        ["Physics made me understand the universe! 🌌", "Learned about forces and motion", "Great for engineering prep", "Teacher connects math to reality", "Experiments were eye-opening"]
    ],
    'History': [
        ["History came alive through stories! 📜", "Learned about different cultures", "Great for understanding current events", "Teacher makes it engaging", "Primary sources were fascinating"],
        ["Government class taught me my rights! 🏛️", "Learned about civic responsibility", "Great for informed citizenship", "Teacher encourages discussion", "Current events connections were helpful"]
    ],
    'Music': [
        ["Band was the highlight of my day! 🎵", "Learned teamwork and discipline", "Great for stress relief", "Teacher is incredibly talented", "Concerts were amazing"],
        ["Choir helped me find my voice! 🎤", "Learned about harmony and rhythm", "Great for confidence building", "Teacher is very encouraging", "Performances were memorable"]
    ],
    'PE': [
        ["PE kept me active and healthy! 🏃", "Learned about fitness and wellness", "Great for stress relief", "Teacher makes it fun", "Sports were competitive but fair"],
        ["Weights class built my confidence! 💪", "Learned proper form and technique", "Great for overall health", "Teacher is very knowledgeable", "Progress was motivating"]
    ],
    'World Languages': [
        ["Spanish opened up new cultures! 🇪🇸", "Learned about different perspectives", "Great for travel and communication", "Teacher makes it fun", "Conversation practice was helpful"],
        ["French was challenging but beautiful! 🇫🇷", "Learned about language structure", "Great for cognitive development", "Teacher is very patient", "Cultural lessons were interesting"]
    ],
    'General': [
        ["This class was really interesting!", "Learned a lot of useful skills", "Great teacher who explains things well", "Challenging but worth the effort", "Would recommend to other students"],
        ["Enjoyed the hands-on activities", "Made new friends in this class", "Teacher is very knowledgeable", "Projects were creative and fun", "Learned skills I'll use in the future"]
    ]
}

# Grade distributions (more realistic)
GRADE_SETS = [
    ['A', 'A-', 'B+', 'B', 'A'],
    ['A-', 'B+', 'A', 'B', 'A-'],
    ['B+', 'A-', 'B', 'A', 'B+'],
    ['A', 'B+', 'A-', 'B', 'A'],
    ['A-', 'B', 'A-', 'B+', 'A-'],
    ['B+', 'A', 'B', 'A-', 'B+'],
    ['A', 'A-', 'B+', 'A', 'B+'],
    ['B', 'A-', 'B+', 'B', 'A-']
]

# Difficulty levels (1-5 scale, more varied)
DIFFICULTY_SETS = [
    [3, 2, 4, 3, 2],
    [4, 3, 5, 3, 4],
    [2, 3, 4, 3, 3],
    [3, 4, 2, 3, 4],
    [4, 3, 5, 2, 4],
    [2, 4, 3, 3, 2],
    [3, 5, 2, 4, 3],
    [4, 2, 3, 4, 3]
]

# Time per week (hours, more realistic)
TIME_SETS = [
    [3, 4, 5, 2, 4],
    [4, 5, 3, 6, 4],
    [2, 3, 4, 3, 2],
    [5, 4, 6, 3, 4],
    [3, 6, 2, 4, 3],
    [4, 3, 5, 4, 3],
    [2, 4, 3, 5, 2],
    [6, 3, 4, 2, 5]
]

# Rating sets (more varied 1-5 scale)
RATING_SETS = [
    [4.2, 3.8, 4.1, 3.9, 4.3],
    [4.4, 3.9, 4.0, 4.2, 3.7],
    [4.1, 3.6, 4.3, 3.8, 4.0],
    [4.5, 4.0, 3.9, 4.2, 4.1],
    [4.3, 3.8, 4.1, 4.0, 3.9],
    [4.2, 3.9, 4.1, 3.7, 4.0],
    [4.1, 3.8, 4.3, 3.9, 4.0],
    [4.0, 4.2, 3.7, 4.1, 3.8]
]

def get_subject_from_class_name(class_name, description):
    """Determine subject area from class name and description."""
    class_name_lower = class_name.lower()
    description_lower = description.lower()
    
    if any(word in class_name_lower for word in ['agriculture', 'agri', 'animal', 'plant', 'food', 'natural']):
        return 'Agriculture'
    elif any(word in class_name_lower for word in ['carpentry', 'wood', 'welding', 'manufacturing', 'cad', 'drafting']):
        return 'CTE'
    elif any(word in class_name_lower for word in ['art', 'drawing', 'painting', 'ceramics', 'photography', 'graphic']):
        return 'Art'
    elif any(word in class_name_lower for word in ['business', 'marketing', 'accounting', 'entrepreneurship', 'finance']):
        return 'Business'
    elif any(word in class_name_lower for word in ['english', 'literature', 'writing', 'journalism', 'speech']):
        return 'English'
    elif any(word in class_name_lower for word in ['algebra', 'geometry', 'calculus', 'statistics', 'math']):
        return 'Math'
    elif any(word in class_name_lower for word in ['biology', 'chemistry', 'physics', 'science']):
        return 'Science'
    elif any(word in class_name_lower for word in ['history', 'government', 'psychology', 'sociology', 'economics']):
        return 'History'
    elif any(word in class_name_lower for word in ['band', 'choir', 'orchestra', 'music']):
        return 'Music'
    elif any(word in class_name_lower for word in ['pe', 'physical', 'weights', 'sports', 'fitness']):
        return 'PE'
    elif any(word in class_name_lower for word in ['spanish', 'french', 'german', 'language']):
        return 'World Languages'
    else:
        return 'General'

def update_class_data():
    """Update all class data with creative and varied information."""
    
    # Read the file
    with open('/home/jackson-diekmann/Desktop/Coding/Courserr/Courserr-main/src/Javascript/ClassInstantiation.js', 'r') as f:
        content = f.read()
    
    # Pattern to match class definitions - more specific
    class_pattern = r'const (\w+) = new Class\(\s*([^;]+?)\);'
    
    def replace_class(match):
        class_name = match.group(1)
        class_content = match.group(2)
        
        # Extract description to determine subject
        desc_match = re.search(r'"([^"]*)"\s*, // description', class_content)
        description = desc_match.group(1) if desc_match else ""
        
        # Determine subject area
        subject = get_subject_from_class_name(class_name, description)
        
        # Get random data sets
        comments = random.choice(COMMENT_SETS.get(subject, COMMENT_SETS['General']))
        grades = random.choice(GRADE_SETS)
        difficulties = random.choice(DIFFICULTY_SETS)
        times = random.choice(TIME_SETS)
        ratings = random.choice(RATING_SETS)
        
        # Replace the data arrays with more specific patterns
        # Replace ratings
        class_content = re.sub(r'\[[\d\.,\s]+\]\s*, // ratings', f'{ratings}, // ratings', class_content)
        
        # Replace comments - handle both single and multiple comments
        comments_str = '[' + ', '.join([f'"{comment}"' for comment in comments]) + ']'
        class_content = re.sub(r'\["[^"]*"(?:\s*,\s*"[^"]*")*\], // comments', f'{comments_str}, // comments', class_content)
        
        # Replace time per week
        class_content = re.sub(r'\[[\d\.,\s]+\]\s*, // averageTimePerWeek', f'{times}, // averageTimePerWeek', class_content)
        
        # Replace grades
        grades_str = '[' + ', '.join([f"'{grade}'" for grade in grades]) + ']'
        class_content = re.sub(r'\[[\'\w\-\+,]+\], // grades', f'{grades_str}, // grades', class_content)
        
        # Replace difficulties
        class_content = re.sub(r'\[[\d\.,\s]+\]\s*, //classDifficulty', f'{difficulties}, //classDifficulty', class_content)
        
        return f'const {class_name} = new Class(\n    {class_content}\n);'
    
    # Apply replacements
    updated_content = re.sub(class_pattern, replace_class, content, flags=re.DOTALL)
    
    # Write back to file
    with open('/home/jackson-diekmann/Desktop/Coding/Courserr/Courserr-main/src/Javascript/ClassInstantiation.js', 'w') as f:
        f.write(updated_content)
    
    print("Successfully updated all class data with creative and varied information!")

if __name__ == "__main__":
    update_class_data()
