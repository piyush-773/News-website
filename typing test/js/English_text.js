var english_arr = [
    "Quantum mechanics describes the behavior of particles at the smallest scales and is fundamental to many fields of science.",

    "In the dance of life, find your rhythm and sway to the music of your heart.",

    "The discovery of the double helix structure of DNA by Watson and Crick paved the way for modern genetics.",

    "Embrace the storms of life, for they water the gardens of your resilience.",

    "Plate tectonics theory explains the movement of Earth's lithosphere and the formation of continents and oceans.",

    "Courage is not the absence of fear, but the strength to conquer it.",

    "Quantum mechanics describes the behavior of particles at the smallest scales and is fundamental to many fields of science.",

    "Success is not measured by wealth, but by the lives you touch.",

    "In the garden of life, sow seeds of love and reap a harvest of joy.",

    "The power to change the world lies within the courage of your convictions.",

    "In the silence of solitude, discover the whispers of your soul.",

    "Dreams are the blueprints of the future; build them with unwavering faith.",

    "The greatest journey begins with a single step; dare to take it.",

    "Mistakes are the portals of discovery; embrace them and grow.",

    "The light within you shines brightest in the darkest of times.",

    "Believe in the magic of possibilities, for they are endless.",

    "Climate change, driven by human activities such as burning fossil fuels, poses significant challenges to ecosystems and societies.",

    "The Big Bang theory describes the origin and evolution of the universe from a hot, dense state to its current form.",

    "Success is not found in the destination, but in the journey itself.",

    "Life is a puzzle; piece it together with patience and perseverance.",

    "Gravitational waves, predicted by Einstein's theory of general relativity, were first detected in 2015, opening a new era of astronomy.",

    "The human brain contains over 86 billion neurons, each connected by intricate networks.",

    "The universe conspires in favor of those who chase their dreams.",

    "Wisdom is the treasure gained from the depths of experience.",

    "The secret to happiness lies in the simplicity of gratitude.",

    "Your worth is not defined by the opinions of others, but by the love you give.",

    "The past is a teacher; learn from it, but do not dwell in it.",

    "Every setback is a setup for a comeback; rise stronger.",

    "Laughter is the music of the soul; play it often.",

    "Strength arises not from what you can control, but from what you can overcome.",

    "The power to create the life of your dreams lies within you.",

    "In the dance of life, be the choreographer of your destiny.",

    "Cybersecurity measures protect systems, networks, and data from cyber threats, ensuring confidentiality, integrity, and availability.",

    "JavaScript, a versatile scripting language, powers dynamic web content and interactive user interfaces.",

    "Success is not about winning the race, but about running it with purpose.",

    "Git, a distributed version control system, enables collaborative development and efficient code management.",

    "5G technology promises faster data speeds, lower latency, and increased connectivity, paving the way for innovations in communication and IoT.",

    "Love is the answer to every question; let it guide your actions.",

    "Blockchain technology, known for its decentralized and tamper-resistant nature, transforms industries by enabling secure and transparent transactions.",

    "In the symphony of life, let your heart be the conductor.",

    "React, a JavaScript library for building user interfaces, employs a component-based architecture for reusable and modular code.",

    "The pursuit of happiness begins with the decision to be happy.",

    "The journey to success is paved with failures; embrace them as lessons.",

    "Let your light shine so brightly that others find their way out of the darkness.",

    "Success is not a destination, but a journey of self-discovery.",

    "Object-oriented programming (OOP) emphasizes the organization of code into objects, encapsulating data and behavior.",

    "Git, a distributed version control system, enables collaborative development and efficient code management.",

    "The key to unlocking your potential lies in your belief in yourself.",

    "Embrace the journey of self-discovery, for therein lies true fulfillment.",

    "Agile methodologies, like Scrum and Kanban, promote iterative development, flexibility, and rapid response to change.",

    "The winds of change may blow, but you are the captain of your ship.",

    "Functional programming emphasizes the use of pure functions and immutable data, promoting clarity and scalability.",

    "GitHub, a popular platform for hosting Git repositories, fosters collaboration and open-source development.",

    "Love without expectation, give without reservation, and live without regret.",

    "Exploring the cosmos ignites a passion within us, compelling humanity to reach for the stars.",

    "In the boundless expanse of space, we encounter mysteries waiting to be unraveled.",

    "The universe is a masterpiece of cosmic artistry, with each celestial body adding to its brilliance.",

    "From the depths of space emerge tales of bravery, exploration, and the enduring human spirit.",

    "Space is not merely a destination but a gateway to infinite realms of possibility.",

    "Gazing at the stars, we are captivated by their beauty and the profound questions they inspire.",

    "Space exploration embodies our innate curiosity, propelling us to push the boundaries of knowledge.",

    "In the silence of the cosmos, we find a canvas for imagination, where dreams take flight amidst the celestial ballet.",

    "The universe is a vast ocean of wonder, with galaxies and nebulae as its shimmering waves.",

    "Space beckons us to venture beyond the familiar, inviting us to embark on a journey of discovery.",

    "The cosmos is a playground for the mind, where ideas flourish and innovation thrives amidst the stars.",

    "Space is not void but teeming with potential, awaiting our exploration and understanding.",

    "As we peer into the abyss of space, we are humbled by the sheer magnitude of the cosmos.",

    "Space exploration is more than a quest for knowledge; it is a testament to human ingenuity and resilience.",

    "In the darkness of the cosmos, we find the brilliance of distant stars, guiding our path through the unknown.",

    "Space is a realm of infinite possibilities, where even the wildest dreams can take shape.",

    "The universe is a repository of wisdom, with each celestial body holding secrets waiting to be revealed.",

    "Space exploration is a voyage of discovery, where every discovery unveils a new chapter in the story of the cosmos.",

    "In the quiet expanse of space, we find solace in the beauty of the universe, a reminder of our place within it.",

    "The cosmos is a symphony of celestial bodies, each playing its part in the cosmic dance of creation.",

    "Space is a canvas for the imagination, where visions of the future take shape among the stars.",

    "Venturing into the depths of space, we are greeted by the breathtaking splendor of the cosmos.",

    "The universe is a vast playground, inviting us to explore its wonders and unlock its secrets.",

    "Space exploration is a journey of curiosity, courage, and the unrelenting pursuit of knowledge.",

    "As we journey through the cosmos, we are reminded of the fragility and preciousness of our own planet, Earth.",

    "Space is a realm of endless possibilities, where the boundaries of what is possible are constantly being redefined.",

    "Exploring space is a testament to the boundless human spirit, pushing the limits of what is achievable.",

    "In the vastness of space, we find inspiration and awe, as we contemplate the mysteries of the universe.",

    "The universe is a canvas, and space exploration is our brush, painting strokes of discovery across the cosmos.",

    "Space is the final frontier, beckoning us to embark on a journey of exploration and wonder.",

    "In the infinite expanse of space, we find a reflection of our own potential and the vastness of our imagination.",

    "Space exploration is a testament to the indomitable human spirit, driving us to explore the unknown and conquer new frontiers.",

    "As we journey through the cosmos, we are humbled by the majesty and complexity of the universe.",

    "Space is a playground for the mind, where ideas take flight and dreams become reality among the stars.",

    "The universe is a vast tapestry, with each star and galaxy a thread weaving the fabric of space and time.",

    "In the silence of space, we find tranquility and wonder, as we contemplate the mysteries of the cosmos.",

    "Space exploration is a journey of discovery, unlocking the secrets of the universe one star at a time.",

    "As we gaze into the depths of space, we are filled with awe and wonder at the beauty and complexity of the cosmos.",

    "Computers have revolutionized communication, enabling instant connections across the globe.",
    
    "The evolution of computer hardware has led to increasingly powerful and compact devices.",
    
    "Software development drives innovation, creating new tools and solutions for diverse needs.",
    
    "The internet has transformed how we access information, connecting us to vast resources.",
    
    "Cybersecurity is essential in safeguarding digital assets and protecting against threats.",
    
    "Artificial intelligence is reshaping industries, with algorithms making autonomous decisions.",
    
    "Data analytics unlocks valuable insights, guiding decision-making in various fields.",
    
    "Cloud computing offers scalable and flexible solutions for storage and processing needs.",
    
    "The digital divide remains a challenge, with disparities in access to technology and skills.",
    
    "Emerging technologies like quantum computing hold the promise of even greater advancements."
]