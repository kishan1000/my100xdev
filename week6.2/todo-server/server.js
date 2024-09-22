const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;

// Sample list of 100 TODOs with title, description, and completed status
const todos = [
    { id: 1, title: 'Buy groceries', description: 'Get milk, eggs, and bread from the store.', completed: false },
    { id: 2, title: 'Walk the dog', description: 'Take the dog for a walk in the park.', completed: false },
    { id: 3, title: 'Read a book', description: 'Finish reading the current chapter of the novel.', completed: false },
    { id: 4, title: 'Clean the house', description: 'Vacuum and mop all floors.', completed: false },
    { id: 5, title: 'Finish project', description: 'Complete the coding project for work.', completed: true },
    { id: 6, title: 'Go to the gym', description: 'Workout for an hour at the gym.', completed: false },
    { id: 7, title: 'Call parents', description: 'Check in with parents and catch up.', completed: false },
    { id: 8, title: 'Watch a movie', description: 'Watch a new movie release.', completed: false },
    { id: 9, title: 'Water the plants', description: 'Water all indoor and outdoor plants.', completed: false },
    { id: 10, title: 'Plan weekend trip', description: 'Make reservations for a weekend getaway.', completed: false },
    { id: 11, title: 'Reply to emails', description: 'Respond to all unread emails.', completed: true },
    { id: 12, title: 'Fix the car', description: 'Repair the issue with the car’s engine.', completed: false },
    { id: 13, title: 'Prepare presentation', description: 'Finish the slides for the upcoming presentation.', completed: false },
    { id: 14, title: 'Check bank account', description: 'Ensure there are no unauthorized transactions.', completed: true },
    { id: 15, title: 'Schedule a meeting', description: 'Set up a meeting with the project team.', completed: false },
    { id: 16, title: 'Organize bookshelf', description: 'Sort books alphabetically by author.', completed: false },
    { id: 17, title: 'Paint the living room', description: 'Repaint the walls with a fresh coat of paint.', completed: false },
    { id: 18, title: 'Pick up dry cleaning', description: 'Collect the dry cleaning from the laundromat.', completed: false },
    { id: 19, title: 'Study for exams', description: 'Prepare for the upcoming exams by reviewing notes.', completed: false },
    { id: 20, title: 'Buy birthday gift', description: 'Get a present for a friend’s birthday.', completed: false },
    { id: 21, title: 'Go hiking', description: 'Hike the nearby mountain trail.', completed: false },
    { id: 22, title: 'Attend yoga class', description: 'Participate in the scheduled yoga class.', completed: false },
    { id: 23, title: 'Create backup files', description: 'Backup all important documents to the cloud.', completed: false },
    { id: 24, title: 'Bake a cake', description: 'Bake a chocolate cake for dessert.', completed: false },
    { id: 25, title: 'Mow the lawn', description: 'Cut the grass in the backyard.', completed: false },
    { id: 26, title: 'Practice coding', description: 'Spend an hour practicing coding challenges.', completed: false },
    { id: 27, title: 'Write a blog post', description: 'Publish a new article on your blog.', completed: false },
    { id: 28, title: 'Do laundry', description: 'Wash and fold all dirty clothes.', completed: false },
    { id: 29, title: 'Pay electricity bill', description: 'Pay the monthly electricity bill online.', completed: true },
    { id: 30, title: 'Prepare dinner', description: 'Cook dinner for the family.', completed: false },
    { id: 31, title: 'Check weather forecast', description: 'Check the weather for the next few days.', completed: false },
    { id: 32, title: 'Start a journal', description: 'Begin writing daily entries in a journal.', completed: false },
    { id: 33, title: 'Meditate', description: 'Spend 15 minutes meditating to relax.', completed: false },
    { id: 34, title: 'Go for a run', description: 'Run 5 kilometers in the morning.', completed: false },
    { id: 35, title: 'Clean the fridge', description: 'Remove old items and clean the refrigerator.', completed: false },
    { id: 36, title: 'Declutter the garage', description: 'Organize and clear out unused items from the garage.', completed: false },
    { id: 37, title: 'Call a friend', description: 'Catch up with an old friend over the phone.', completed: false },
    { id: 38, title: 'Plan a vacation', description: 'Research and book a vacation for next summer.', completed: false },
    { id: 39, title: 'Upgrade laptop', description: 'Install new hardware to speed up the laptop.', completed: false },
    { id: 40, title: 'Repair leaking faucet', description: 'Fix the faucet in the kitchen sink.', completed: false },
    { id: 41, title: 'Buy new shoes', description: 'Get a new pair of running shoes.', completed: false },
    { id: 42, title: 'Organize a party', description: 'Plan and organize a birthday party.', completed: false },
    { id: 43, title: 'Donate old clothes', description: 'Drop off old clothes at the donation center.', completed: false },
    { id: 44, title: 'Watch a documentary', description: 'Watch an interesting documentary on TV.', completed: false },
    { id: 45, title: 'Learn a new recipe', description: 'Cook a dish from a new recipe.', completed: false },
    { id: 46, title: 'Go to a concert', description: 'Attend a live music concert.', completed: false },
    { id: 47, title: 'Buy a new phone', description: 'Purchase the latest smartphone model.', completed: false },
    { id: 48, title: 'Take a cooking class', description: 'Sign up for a local cooking class.', completed: false },
    { id: 49, title: 'Finish puzzle', description: 'Complete the 1000-piece puzzle.', completed: false },
    { id: 50, title: 'Learn a new language', description: 'Start learning the basics of a new language.', completed: false },
    { id: 51, title: 'Go fishing', description: 'Spend the day fishing at the lake.', completed: false },
    { id: 52, title: 'Buy a new book', description: 'Purchase the latest bestseller.', completed: false },
    { id: 53, title: 'Plan a surprise', description: 'Plan a surprise for a loved one.', completed: false },
    { id: 54, title: 'Organize a workshop', description: 'Set up a workshop for the team.', completed: false },
    { id: 55, title: 'Take a day off', description: 'Relax and unwind on a day off.', completed: false },
    { id: 56, title: 'Build a website', description: 'Create a personal portfolio website.', completed: false },
    { id: 57, title: 'Create a playlist', description: 'Make a new music playlist for workouts.', completed: false },
    { id: 58, title: 'Install new software', description: 'Install the latest version of design software.', completed: false },
    { id: 59, title: 'Go swimming', description: 'Spend the afternoon swimming at the pool.', completed: false },
    { id: 60, title: 'Attend a webinar', description: 'Join an online webinar about career development.', completed: false },
    { id: 61, title: 'Go camping', description: 'Spend a weekend camping in the woods.', completed: false },
    { id: 62, title: 'Start a garden', description: 'Plant vegetables in the backyard garden.', completed: false },
    { id: 63, title: 'Create a budget', description: 'Set up a monthly budget to track expenses.', completed: false },
    { id: 64, title: 'Learn to play guitar', description: 'Take lessons to learn guitar basics.', completed: false },
    { id: 65, title: 'Take family photos', description: 'Schedule a family photo session.', completed: false },
    { id: 66, title: 'Go to the dentist', description: 'Visit the dentist for a routine checkup.', completed: false },
    { id: 67, title: 'Organize a charity event', description: 'Plan and run a local charity event.', completed: false },
    { id: 68, title: 'Fix the computer', description: 'Repair issues with the computer’s performance.', completed: false },
    { id: 69, title: 'Buy groceries', description: 'Restock pantry with essential food items.', completed: false },
    { id: 70, title: 'Go to the beach', description: 'Spend a day relaxing at the beach.', completed: false },
    { id: 71, title: 'Sign up for a gym membership', description: 'Join the local fitness center.', completed: false },
    { id: 72, title: 'Write a poem', description: 'Write a poem about nature.', completed: false },
    { id: 73, title: 'Start a podcast', description: 'Record the first episode of a podcast.', completed: false },
    { id: 74, title: 'Take a road trip', description: 'Drive to a nearby city for a day trip.', completed: false },
    { id: 75, title: 'Make homemade pasta', description: 'Learn how to make pasta from scratch.', completed: false },
    { id: 76, title: 'Run a 10K race', description: 'Participate in a local 10K running race.', completed: false },
    { id: 77, title: 'Start a workout routine', description: 'Set up a new fitness routine for daily exercise.', completed: false },
    { id: 78, title: 'Go to an amusement park', description: 'Spend a day at an amusement park.', completed: false },
    { id: 79, title: 'Create a business plan', description: 'Outline a business plan for a startup idea.', completed: false },
    { id: 80, title: 'Try a new restaurant', description: 'Visit a restaurant you haven’t been to before.', completed: false },
    { id: 81, title: 'Learn to bake bread', description: 'Try baking homemade bread.', completed: false },
    { id: 82, title: 'Take a photography course', description: 'Join an online photography course.', completed: false },
    { id: 83, title: 'Watch a new TV series', description: 'Start a new TV series recommended by a friend.', completed: false },
    { id: 84, title: 'Visit an art gallery', description: 'Explore the latest exhibition at an art gallery.', completed: false },
    { id: 85, title: 'Write a letter', description: 'Write a handwritten letter to a friend.', completed: false },
    { id: 86, title: 'Start a new hobby', description: 'Learn a new hobby like knitting or painting.', completed: false },
    { id: 87, title: 'Join a book club', description: 'Sign up for a local book club.', completed: false },
    { id: 88, title: 'Do a digital detox', description: 'Spend a day without using any digital devices.', completed: false },
    { id: 89, title: 'Make a scrapbook', description: 'Create a scrapbook of vacation memories.', completed: false },
    { id: 90, title: 'Try yoga', description: 'Begin a daily yoga practice at home.', completed: false },
    { id: 91, title: 'Host a dinner party', description: 'Invite friends over for a homemade dinner.', completed: false },
    { id: 92, title: 'Start meal prepping', description: 'Prepare meals for the week in advance.', completed: false },
    { id: 93, title: 'Write a book review', description: 'Review the latest book you read.', completed: false },
    { id: 94, title: 'Go to a farmers market', description: 'Visit a local farmers market for fresh produce.', completed: false },
    { id: 95, title: 'Complete an online course', description: 'Finish an online certification course.', completed: false },
    { id: 96, title: 'Organize a scavenger hunt', description: 'Set up a scavenger hunt for kids.', completed: false },
    { id: 97, title: 'Redecorate a room', description: 'Change up the decor in the living room.', completed: false },
    { id: 98, title: 'Go to a sports game', description: 'Attend a live sports event.', completed: false },
    { id: 99, title: 'Make candles', description: 'Try making homemade scented candles.', completed: false },
    { id: 100, title: 'Plant a tree', description: 'Plant a tree in the backyard.', completed: false },
];

// Helper function to generate a random TODO
const getRandomTodos = () => {
    const randomStartIndex = Math.floor(Math.random() * todos.length);
    const randomEndIndex = Math.floor(Math.random() * todos.length);
    return todos.slice(Math.min(randomStartIndex, randomEndIndex), Math.max(randomStartIndex, randomEndIndex));
};

// GET endpoint to provide a random TODO
app.get('/todos', (req, res) => {
    const randomTodos = getRandomTodos();
    res.json(randomTodos);
});

// GET endpoint to provide todo based on id
app.get('/todo', (req, res)=>{
    const todoId = parseInt(req.query.id, 10); // Get the id from query params and convert to integer
    const todo = todos.find(t => t.id === todoId); // Find the TODO with the matching id

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ error: 'TODO not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
