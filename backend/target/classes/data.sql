
              
INSERT INTO users (id, username, password, first_name, last_name, email, channel_description, registration_date, role, blocked, picture)
VALUES
(1, 'miroslav', '$2y$12$NH2KM2BJaBl.ik90Z1YqAOjoPgSd0ns/bF.7WedMxZ54OhWQNNnh6', 'Miroslav', 'Simic', 'miroslav@maildrop.cc', 'Dobrodošli na moj kanal!', '2020-06-20 20:00', 'ADMIN', false, NULL),
(2, 'tamara', '$2y$12$DRhCpltZygkA7EZ2WeWIbewWBjLE0KYiUO.tHDUaJNMpsHxXEw9Ky', 'Tamara', 'Milosavljevic', 'tamara@maildrop.cc', NULL, '2020-06-20 20:00', 'USER', false, NULL),
(3, 'petar', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Petar', 'Jovic', 'petar@maildrop.cc', NULL, '2020-06-20 20:00', 'USER', false, NULL),
(4, 'ognjen', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Ognjen', 'Janjic', 'ognjen@maildrop.cc', NULL, '2020-06-20 21:00', 'ADMIN', false, NULL),
(5, 'luka', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Luka', 'Janjic', 'luka@maildrop.cc', NULL, '2020-07-20 20:00', 'USER', false, NULL),
(6, 'sasa', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Sasa', 'Jovic', 'sasa@maildrop.cc', NULL, '2020-08-20 20:00', 'USER', false, NULL),
(7, 'miljana', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Miljana', 'Medic', 'miljana@maildrop.cc', NULL, '2020-09-20 20:00', 'ADMIN', false, NULL),
(8, 'marija', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Marija', 'Djordjevic', 'marija@maildrop.cc', NULL, '2020-10-20 20:00', 'USER', false, NULL),
(9, 'manja', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Manja', 'Batar', 'manja@maildrop.cc', NULL, '2020-11-20 20:00', 'USER', false, NULL),
(10, 'darko', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Darko', 'kolobaric', 'darko@maildrop.cc', NULL, '2020-12-20 20:00', 'USER', false, NULL),
(11, 'stefan', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Stefan', 'Stefanovic', 'stefan@maildrop.cc', NULL, '2020-12-20 20:00', 'USER', false, NULL),
(12, 'mitar', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Mitar', 'Radovic', 'mitar@maildrop.cc', NULL, '2020-06-22 20:00', 'USER', false, NULL),
(13, 'dusan', '$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC', 'Dusan', 'Gavrilovic', 'dusan@maildrop.cc', NULL, '2020-06-21 20:00', 'USER', false, NULL);

INSERT INTO videos (id, title, video_url, thumbnail_url, description, visibility, allow_comments, show_ratings, blocked, views, creation_date, owner_id)
VALUES
(1,"Crazy video", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/flat-design-travel-youtube-channel-art_23-2149096701.jpg?w=1060&t=st=1691754563~exp=1691755163~hmac=7e7b89dd107935bb6e2b6c8c00e57af963398e37d741bf6d34e725d30784a14b', 'Ovo je prvi video na mom kanalu!', 'PUBLIC', true, true, false, 1000, '2020-06-21 20:00', 1),
(2,"Football match", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://cdn.britannica.com/53/74853-004-4C4F7CA7/Ronaldo-Brazil-players-match-German-2002-World-2002.jpg?s=1500x700&q=85', 'Pogledajte moj drugi video!', 'PUBLIC', true, true, false, 51213, '2020-06-21 20:00', 2),
(3, 'Football match 1', 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://cdn.britannica.com/53/74853-004-4C4F7CA7/Ronaldo-Brazil-players-match-German-2002-World-2002.jpg?s=1500x700&q=85' , 'Pogledajte moj drugi video!', 'PRIVATE', false, true, false, 32423, '2020-06-21 20:00', 2),
(4,"Football match 2", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://cdn.britannica.com/53/74853-004-4C4F7CA7/Ronaldo-Brazil-players-match-German-2002-World-2002.jpg?s=1500x700&q=85', 'Pogledajte moj drugi video!', 'PUBLIC', false, true, false, 332221, '2020-06-22 20:00', 2),
(5,"Football match 3", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://cdn.britannica.com/53/74853-004-4C4F7CA7/Ronaldo-Brazil-players-match-German-2002-World-2002.jpg?s=1500x700&q=85', 'Pogledajte moj drugi video!', 'PUBLIC', true, true, false, 556532, '2020-06-23 20:00', 2),
(6,"Football match 4", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-game-youtube-thumbnail_23-2149848776.jpg?w=1060&t=st=1691755406~exp=1691756006~hmac=787266c1daac5a4ac2b1c13ade3954ed0deb73696843aedecf522086c4d63eef', 'This is a cool game!', 'PUBLIC', true, true, false, 32423, '2020-06-24 20:00', 9),
(7,"Football match 5", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-game-youtube-thumbnail_23-2149848776.jpg?w=1060&t=st=1691755406~exp=1691756006~hmac=787266c1daac5a4ac2b1c13ade3954ed0deb73696843aedecf522086c4d63eef', 'I love football', 'PUBLIC', true, false, false, 3445, '2020-06-25 20:00', 9),
(8,"Football match 6", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-game-youtube-thumbnail_23-2149848776.jpg?w=1060&t=st=1691755406~exp=1691756006~hmac=787266c1daac5a4ac2b1c13ade3954ed0deb73696843aedecf522086c4d63eef', 'I love football', 'PUBLIC', true, true, false, 6342, '2020-06-26 20:00', 2),
(9,"Football match 7", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-game-youtube-thumbnail_23-2149848776.jpg?w=1060&t=st=1691755406~exp=1691756006~hmac=787266c1daac5a4ac2b1c13ade3954ed0deb73696843aedecf522086c4d63eef', 'I love football', 'PUBLIC', true, true, false, 45, '2020-06-26 21:00', 2),
(10,"Football match 8", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-game-youtube-thumbnail_23-2149848776.jpg?w=1060&t=st=1691755406~exp=1691756006~hmac=787266c1daac5a4ac2b1c13ade3954ed0deb73696843aedecf522086c4d63eef', 'This is a cool game!', 'PUBLIC', true, true, false, 74543, '2020-06-26 22:00', 2),
(11,"Football match 9", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-game-youtube-thumbnail_23-2149848776.jpg?w=1060&t=st=1691755406~exp=1691756006~hmac=787266c1daac5a4ac2b1c13ade3954ed0deb73696843aedecf522086c4d63eef', 'Pogledajte moj drugi video!', 'PUBLIC', true, true, false, 65436, '2020-06-26 23:00', 2),
(12,"Football match 10", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-game-youtube-thumbnail_23-2149848776.jpg?w=1060&t=st=1691755406~exp=1691756006~hmac=787266c1daac5a4ac2b1c13ade3954ed0deb73696843aedecf522086c4d63eef', 'This is a cool game!', 'PUBLIC', true, false, false, 134343, '2020-06-26 10:00', 2),
(13,"Football match 11", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/hand-drawn-soccer-youtube-thumbnail_23-2149342315.jpg?w=1060&t=st=1691755352~exp=1691755952~hmac=03102a14f8f016956a5c9f689620307e9eade3604ae4efba23c15d3508a7cce0', 'Pogledajte moj drugi video!', 'PUBLIC', true, false, true, 34532, '2020-06-26 11:00', 2),
(14,"Football match 12", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/hand-drawn-soccer-youtube-thumbnail_23-2149342315.jpg?w=1060&t=st=1691755352~exp=1691755952~hmac=03102a14f8f016956a5c9f689620307e9eade3604ae4efba23c15d3508a7cce0', 'I love football', 'PUBLIC', true, false, true, 5754, '2020-06-26 12:00', 10),
(15,"Football match 13", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/hand-drawn-soccer-youtube-thumbnail_23-2149342315.jpg?w=1060&t=st=1691755352~exp=1691755952~hmac=03102a14f8f016956a5c9f689620307e9eade3604ae4efba23c15d3508a7cce0', 'I love football', 'PUBLIC', true, true, true, 43333, '2020-06-26 13:00', 10),
(16,"Football match 14", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/hand-drawn-soccer-youtube-thumbnail_23-2149342315.jpg?w=1060&t=st=1691755352~exp=1691755952~hmac=03102a14f8f016956a5c9f689620307e9eade3604ae4efba23c15d3508a7cce0', 'Pogledajte moj drugi video!', 'PUBLIC', true, true, true, 23456, '2020-06-26 14:00', 2),
(17,"Football match 15", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/hand-drawn-soccer-youtube-thumbnail_23-2149342315.jpg?w=1060&t=st=1691755352~exp=1691755952~hmac=03102a14f8f016956a5c9f689620307e9eade3604ae4efba23c15d3508a7cce0', 'This is a cool game!', 'PUBLIC', true, true, true, 233, '2020-06-27 15:00', 2),
(18,"Football match 16", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-youtube-thumbnail_23-2149871208.jpg?w=1380&t=st=1691755320~exp=1691755920~hmac=a094bc7d259ab2028f5a1eac280ad4abb803928a9c96c3b88974e393775e12e0', 'Pogledajte moj peti video!', 'PUBLIC', true, true, false, 23323, '2020-05-23 15:00', 12),
(19,"Football match 17", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-youtube-thumbnail_23-2149871208.jpg?w=1380&t=st=1691755320~exp=1691755920~hmac=a094bc7d259ab2028f5a1eac280ad4abb803928a9c96c3b88974e393775e12e0', 'I love football', 'PUBLIC', true, true, false, 2233, '2020-05-22 15:00', 2),
(20,"Football match 18", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-youtube-thumbnail_23-2149871208.jpg?w=1380&t=st=1691755320~exp=1691755920~hmac=a094bc7d259ab2028f5a1eac280ad4abb803928a9c96c3b88974e393775e12e0', 'I love football very much', 'PUBLIC', true, false, false, 23312, '2020-05-22 15:00', 11),
(21,"Football match 19", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/gradient-football-youtube-thumbnail_23-2149871208.jpg?w=1380&t=st=1691755320~exp=1691755920~hmac=a094bc7d259ab2028f5a1eac280ad4abb803928a9c96c3b88974e393775e12e0', 'Pogledajte moj drugi video!', 'PUBLIC', true, true, false, 23333, '2020-05-21 15:00', 2),
(22,"Football match 20", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-youtube-thumbnail-template-design-1a052798f3f8109e4599f77c2e19d691_screen.jpg?ts=1591730783', 'Pogledajte moj drugi video!', 'PUBLIC', true, true, false, 234353, '2020-05-14 15:00', 2),
(23,"Football match 21", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-youtube-thumbnail-template-design-1a052798f3f8109e4599f77c2e19d691_screen.jpg?ts=1591730783', 'Pogledajte moj drugi video!', 'PUBLIC', true, true, false, 2533, '2020-05-29 15:00', 2),
(24,"Football match 22", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-youtube-thumbnail-template-design-1a052798f3f8109e4599f77c2e19d691_screen.jpg?ts=1591730783', 'Pogledajte moj drugi video!', 'PUBLIC', true, true, false, 65233, '2020-05-12 15:00', 2),
(25, "Amazing Nature", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/drawn-recipes-youtube-thumbnail_23-2148926453.jpg?w=1380&t=st=1691755196~exp=1691755796~hmac=a35294d165637ac88f07e1aa3af12eea31dc8f27d651f60ce3ab6346f050acd0', 'Explore the beauty of nature from around the world.', 'PUBLIC', true, true, false, 80345, '2021-08-15 10:00', 3),
(26, "Mindful Meditation", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/vecteurs-libre/vignette-youtube-entraineur-personnel-degrade_23-2149457404.jpg?w=1060&t=st=1691755020~exp=1691755620~hmac=63e9d8140fcc37353fb4fdbec76557b632aa5d36e553d8808c4be1c3a6ad90f4', 'Take a moment to relax and find your inner peace.', 'PUBLIC', true, true, false, 12054, '2021-08-16 12:00', 3),
(27, "Gourmet Delights", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600', 'Indulge in the world of culinary delights and recipes.', 'PUBLIC', true, true, false, 50540, '2021-08-17 14:00', 4),
(28, "Artistic Inspirations", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600', 'Get inspired by various art forms and creative techniques.', 'PUBLIC', true, true, false, 7004, '2021-08-18 16:00', 4),
(29, "Epic Gaming Moments", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/drawn-recipes-youtube-thumbnail_23-2148926453.jpg?w=1380&t=st=1691755196~exp=1691755796~hmac=a35294d165637ac88f07e1aa3af12eea31dc8f27d651f60ce3ab6346f050acd0', 'Witness thrilling gaming victories and strategies.', 'PUBLIC', true, true, false, 154320, '2021-08-19 18:00', 5),
(30, "Virtual Adventures", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/vecteurs-libre/vignette-youtube-entraineur-personnel-degrade_23-2149457404.jpg?w=1060&t=st=1691755020~exp=1691755620~hmac=63e9d8140fcc37353fb4fdbec76557b632aa5d36e553d8808c4be1c3a6ad90f4', 'Embark on virtual reality adventures in far-off worlds.', 'PUBLIC', true, true, false, 90420, '2021-08-20 20:00', 5),
(31, "Fitness Workouts", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/vecteurs-libre/vignette-youtube-entraineur-personnel-degrade_23-2149457404.jpg?w=1060&t=st=1691755020~exp=1691755620~hmac=63e9d8140fcc37353fb4fdbec76557b632aa5d36e553d8808c4be1c3a6ad90f4', 'Stay active and healthy with a variety of fitness routines.', 'PUBLIC', true, true, false, 12030, '2021-08-21 09:00', 6),
(32, "Cooking Adventures", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=600', 'Join me in exploring the world of unique recipes and cooking.', 'PUBLIC', true, true, false, 80780, '2021-08-22 10:00', 6),
(33, "Travel Diaries", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=600', 'Discover hidden gems and cultural experiences from my journeys.', 'PUBLIC', true, true, false, 200430, '2021-08-23 14:00', 7),
(34, "Book Lovers' Corner", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-vector/drawn-recipes-youtube-thumbnail_23-2148926453.jpg?w=1380&t=st=1691755196~exp=1691755796~hmac=a35294d165637ac88f07e1aa3af12eea31dc8f27d651f60ce3ab6346f050acd0', 'Dive into the world of literature and storytelling.', 'PUBLIC', true, true, false, 1526055, '2021-08-24 16:00', 7),
(35, "Tech Reviews", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600', 'Stay updated on the latest technological innovations and gadgets.', 'PUBLIC', true, true, false, 150056, '2021-08-25 18:00', 8),
(36, "DIY Creations", 'https://www.youtube.com/watch?v=Wtg0Wj_l0Is&ab_channel=EMHD', 'https://img.freepik.com/free-psd/banner-template-professional-business-solutions_23-2149024792.jpg?w=1380&t=st=1691754892~exp=1691755492~hmac=73e33620d800e038900f776d4cbf07a29ee47655e91a27bfd68149ebcaf5f968', 'Unleash your creativity with fun and practical DIY projects.', 'PUBLIC', true, true, false, 900565, '2021-08-26 20:00', 8);
   



 






INSERT INTO comments (id, content, creation_date, owner_id, video_id)
VALUES
(1, 'Odličan video!', '2020-06-22 20:00', 3, 1),
(2, 'Hvala vam puno!', '2020-06-22 20:00', 1, 2),
(3, 'Hvala vam bas je dobro!', '2020-06-23 20:00', 2, 2),
(4, 'Hvala vam ekstra je!', '2019-06-24 20:00', 3, 2),
(5, 'Hvala vam ludilooo!', '2020-06-25 20:00', 4, 2),
(6, 'Hvala vam fdsfsdfs!', '2020-06-26 20:00', 5, 2),
(7, 'Hvala vam nimalo!', '2020-06-27 20:00', 6, 2),
(8, 'Hvala vam onako!', '2022-06-28 20:00', 7, 2),
(9, 'Hvala vam malo!', '2020-06-10 20:00', 8, 2),
(10, 'Hvala vam onako tu i tamo!', '2020-06-11 20:00', 9, 2),
(11, 'Hvala vam na klipu mnogo je dobar !', '2020-06-12 20:00', 10, 2),
(12, 'Hvala vam legendo!', '2020-06-13 20:00', 11, 2),
(13, 'Hvala vam bas bas!', '2020-06-14 20:00', 12, 2),
(14, 'Amazing content!', '2021-03-15 15:30', 7, 5),
(15, 'This is gold!', '2021-04-17 12:45', 11, 8),
(16, 'Incredible video!', '2020-08-05 09:15', 4, 13),
(17, 'Wow, I''m impressed!', '2020-09-22 18:20', 10, 19),
(18, 'You nailed it!', '2021-01-11 21:10', 5, 25),
(19, 'Such valuable information!', '2022-02-08 14:55', 2, 27),
(20, 'This video deserves more views!', '2022-05-19 16:25', 8, 30),
(21, 'Mind-blowing content!', '2020-12-02 10:30', 1, 14),
(22, 'I''m learning a lot from this.', '2021-07-08 13:40', 6, 12),
(23, 'You''re doing a great job!', '2021-09-30 17:50', 3, 18),
(24, 'Impressive work!', '2020-11-28 08:00', 9, 9),
(25, 'This is pure gold!', '2022-03-14 22:15', 12, 3),
(26, 'You''re on fire!', '2022-07-01 11:05', 5, 22),
(27, 'I can''t believe how good this is!', '2021-06-16 19:20', 7, 29),
(28, 'This video changed my perspective.', '2021-08-29 14:30', 4, 17),
(29, 'Keep up the fantastic work!', '2020-10-10 08:45', 8, 6),
(30, 'Your content is a game-changer!', '2020-12-12 17:50', 2, 15),
(31, 'This is top-notch content!', '2021-11-23 09:30', 10, 10),
(32, 'Your videos are always amazing!', '2021-07-05 14:15', 9, 20),
(33, 'I can''t stop watching your videos!', '2022-04-19 16:40', 3, 28),
(34, 'Thank you for sharing your knowledge!', '2020-10-15 11:00', 11, 10),
(35, 'Brilliant work as always!', '2022-01-03 18:20', 6, 21),
(36, 'Your videos inspire me!', '2021-05-29 22:30', 10, 26),
(37, 'This video blew my mind!', '2021-09-07 15:45', 4, 4),
(38, 'You''re a true expert!', '2022-06-08 07:10', 2, 16),
(39, 'I''ve learned so much from you!', '2023-01-12 13:25', 7, 23),
(40, 'Your content is life-changing!', '2020-08-18 19:50', 5, 11),
(41, 'Keep up the phenomenal work!', '2021-02-26 10:15', 12, 1),
(42, 'I can''t get enough of your videos!', '2022-09-30 21:30', 8, 27),
(43, 'Your videos make my day!', '2020-07-14 12:40', 1, 9),
(44, 'You''re the reason I started learning!', '2021-10-02 08:55', 6, 15),
(45, 'Unbelievable quality!', '2021-12-27 14:10', 3, 12),
(46, 'You''re a true inspiration!', '2022-03-19 16:25', 10, 29),
(47, 'Your videos are goldmines!', '2020-11-09 11:40', 4, 18),
(48, 'I appreciate your hard work!', '2022-05-08 17:00', 7, 24),
(49, 'This video changed my perspective!', '2022-08-21 19:15', 9, 6),
(50, 'You deserve all the praise!', '2021-04-30 22:30', 5, 13),
(51, 'Mind-blowing insights!', '2022-01-14 08:45', 8, 14),
(52, 'Your videos are a treasure trove!', '2021-07-17 11:20', 12, 22),
(53, 'You''re doing an incredible job!', '2020-09-28 15:30', 6, 3),
(54, 'This content is pure gold!', '2022-05-01 19:40', 3, 5),
(55, 'Thank you for sharing your wisdom!', '2021-02-03 10:50', 9, 7),
(56, 'You''re my favorite content creator!', '2022-03-12 14:15', 2, 30),
(57, 'Your videos deserve more recognition!', '2022-08-08 16:30', 5, 19),
(58, 'This video blew my mind!', '2020-11-06 18:45', 10, 25),
(59, 'You''re making a real impact!', '2021-12-18 21:00', 4, 8),
(60, 'Your insights are invaluable!', '2023-02-20 22:15', 7, 17),
(61, 'This video is a game-changer!', '2020-06-16 12:20', 1, 21),
(62, 'You''re a true visionary!', '2022-04-23 15:30', 11, 26),
(63, 'I''m learning so much from you!', '2021-09-09 10:40', 6, 28),
(64, 'Your dedication is inspiring!', '2020-08-05 09:00', 12, 2),
(65, 'This video resonated with me deeply.', '2022-01-28 11:15', 3, 11),
(66, 'You''re raising the bar for content!', '2021-05-14 13:20', 9, 23),
(67, 'Your work speaks volumes!', '2023-04-10 14:45', 5, 16),
(68, 'This video deserves all the awards!', '2020-10-20 17:00', 2, 4),
(69, 'You''re a true role model!', '2022-07-08 18:15', 10, 20),
(70, 'Your videos brighten my day!', '2021-03-03 21:30', 7, 15);

INSERT INTO likes_dislikes (id, is_like, creation_date, user_id, video_id, comment_id)
VALUES
(1, true, '2020-06-23 20:00', 1, 2, NULL),
(2, true, '2020-06-23 20:00', 2, 2, NULL),
(3, true, '2020-06-23 20:00', 3, 2, NULL),
(4, true, '2020-06-23 20:00', 4, 2, NULL),
(5, true, '2020-06-23 20:00', 5, 2, NULL),
(6, false, '2020-06-23 20:00', 6, 2, NULL),
(7, false, '2020-06-23 20:00', 7, 2, NULL),
(8, true, '2020-06-23 20:00', 8, 2, NULL),
(9, true, '2020-06-23 20:00', 9, 2, NULL),
(10, true, '2020-06-23 20:00', 10, 2, NULL),
(11, true, '2020-06-23 20:00', 11, 2, NULL),
(12, true, '2020-06-23 20:00', 12, 2, NULL),
(13, true, '2020-06-23 20:00', 2, NULL, 8),
(14, true, '2020-06-22 20:00', 3, NULL, 8),
(15, false, '2020-06-21 20:00', 4, NULL, 8),
(16, true, '2020-06-20 20:00', 5, NULL, 8),
(17, true, '2020-06-19 20:00', 6, NULL, 8),
(18, true, '2020-06-18 20:00', 7, NULL, 8),
(19, true, '2021-03-01 15:00', 8, 6, NULL),
(20, false, '2021-03-01 16:00', 9, 6, NULL),
(21, true, '2021-03-02 17:00', 10, 6, NULL),
(22, true, '2021-03-02 18:00', 11, 6, NULL),
(23, true, '2021-03-03 19:00', 12, 6, NULL),
(24, false, '2021-03-03 20:00', 1, 6, NULL),
(25, true, '2021-03-04 21:00', 2, 6, NULL),
(26, false, '2021-03-04 22:00', 3, 6, NULL),
(27, true, '2021-03-05 23:00', 4, 6, NULL),
(28, true, '2021-03-05 10:00', 5, 6, NULL),
(29, true, '2021-03-06 11:00', 6, 6, NULL),
(30, true, '2021-03-06 12:00', 7, 6, NULL),
(31, true, '2021-03-07 13:00', 8, NULL, 18),
(32, true, '2021-03-07 14:00', 9, NULL, 18),
(33, true, '2021-03-08 15:00', 10, NULL, 18),
(34, true, '2021-03-08 16:00', 11, NULL, 18),
(35, true, '2021-03-09 17:00', 12, NULL, 18),
(36, false, '2021-03-09 18:00', 1, NULL, 18),
(37, true, '2021-03-10 19:00', 2, NULL, 18),
(38, false, '2021-03-10 20:00', 3, NULL, 18),
(39, true, '2021-03-11 21:00', 4, NULL, 18),
(40, true, '2021-03-11 22:00', 5, NULL, 18),
(41, true, '2021-03-12 23:00', 6, NULL, 18),
(42, true, '2021-03-12 10:00', 7, NULL, 18),
(43, true, '2021-03-13 11:00', 8, 17, NULL),
(44, true, '2021-03-13 12:00', 9, 17, NULL),
(45, true, '2021-03-14 13:00', 10, 17, NULL),
(46, true, '2021-03-14 14:00', 11, 17, NULL),
(47, true, '2021-03-15 15:00', 12, 17, NULL),
(48, false, '2021-03-15 16:00', 1, 17, NULL),
(49, true, '2021-03-16 17:00', 2, 15, NULL),
(50, false, '2021-03-16 18:00', 3, 15, NULL),
(51, true, '2021-03-17 19:00', 4, 15, NULL),
(52, true, '2021-03-17 20:00', 5, 15, NULL),
(53, true, '2021-03-18 21:00', 6, 15, NULL),
(54, false, '2021-03-18 22:00', 7, 15, NULL),
(55, true, '2021-03-19 23:00', 8, 15, NULL),
(56, false, '2021-03-19 10:00', 9, 15, NULL),
(57, true, '2021-03-20 11:00', 10, 15, NULL),
(58, true, '2021-03-20 12:00', 11, 15, NULL),
(59, true, '2021-03-21 13:00', 12, 15, NULL),
(60, true, '2021-03-21 14:00', 1, 15, NULL),
(61, true, '2021-03-22 15:00', 3, NULL, 22),
(62, true, '2021-03-22 16:00', 5, NULL, 22),
(63, true, '2021-03-23 17:00', 7, NULL, 22),
(64, true, '2021-03-23 18:00', 9, NULL, 22),
(65, true, '2021-03-24 19:00', 11, NULL, 22),
(66, false, '2021-03-24 20:00', 12, NULL, 22),
(67, true, '2021-03-25 21:00', 2, NULL, 22),
(68, false, '2021-03-25 22:00', 4, NULL, 22),
(69, true, '2021-03-26 23:00', 6, NULL, 22),
(70, true, '2021-03-26 10:00', 8, NULL, 22),
(71, true, '2021-03-27 11:00', 10, NULL, 22),
(72, true, '2021-03-27 12:00', 1, NULL, 22),
(73, true, '2021-03-28 13:00', 4, 10, NULL),
(74, true, '2021-03-28 14:00', 7, 10, NULL),
(75, true, '2021-03-29 15:00', 9, 10, NULL),
(76, true, '2021-03-29 16:00', 12, 10, NULL),
(77, true, '2021-03-30 17:00', 3, 10, NULL),
(78, false, '2021-03-30 18:00', 5, 10, NULL),
(79, true, '2021-03-31 19:00', 7, 9, NULL),
(80, true, '2021-03-31 20:00', 9, 9, NULL),
(81, true, '2021-04-01 21:00', 11, 9, NULL),
(82, true, '2021-04-01 22:00', 1, 9, NULL),
(83, true, '2021-04-02 23:00', 2, 9, NULL),
(84, false, '2021-04-02 10:00', 4, 9, NULL),
(85, true, '2021-04-03 11:00', 6, 9, NULL),
(86, false, '2021-04-03 12:00', 8, 9, NULL),
(87, true, '2021-04-04 13:00', 10, 9, NULL),
(88, true, '2021-04-04 14:00', 12, 9, NULL),
(89, true, '2021-04-05 15:00', 3, 9, NULL),
(90, true, '2021-04-05 16:00', 5, 9, NULL),
(91, true, '2021-04-06 17:00', 9, NULL, 24),
(92, true, '2021-04-06 18:00', 12, NULL, 24),
(93, true, '2021-04-07 19:00', 1, NULL, 24),
(94, true, '2021-04-07 20:00', 3, NULL, 24),
(95, true, '2021-04-08 21:00', 5, NULL, 24),
(96, false, '2021-04-08 22:00', 7, NULL, 24),
(97, true, '2021-04-09 23:00', 9, NULL, 24),
(98, false, '2021-04-09 10:00', 11, NULL, 24),
(99, true, '2021-04-10 11:00', 2, NULL, 24),
(100, true, '2021-04-10 12:00', 4, NULL, 24),
(101, true, '2021-04-11 13:00', 6, NULL, 24),
(102, true, '2021-04-11 14:00', 8, NULL, 24),
(103, true, '2021-04-12 15:00', 10, 16, NULL),
(104, true, '2021-04-12 16:00', 12, 16, NULL),
(105, true, '2021-04-13 17:00', 2, 16, NULL),
(106, true, '2021-04-13 18:00', 4, 16, NULL),
(107, true, '2021-04-14 19:00', 6, 16, NULL),
(108, false, '2021-04-14 20:00', 8, 16, NULL),
(109, true, '2021-04-15 21:00', 10, 16, NULL),
(110, false, '2021-04-15 22:00', 1, 16, NULL),
(111, true, '2021-04-16 23:00', 3, 25, NULL),
(112, false, '2021-04-16 10:00', 5, 25, NULL),
(113, true, '2021-04-17 11:00', 7, 25, NULL),
(114, true, '2021-04-17 12:00', 9, 25, NULL),
(115, true, '2021-04-18 13:00', 11, 25, NULL),
(116, false, '2021-04-18 14:00', 12, 25, NULL),
(117, true, '2021-04-19 15:00', 2, 25, NULL),
(118, false, '2021-04-19 16:00', 4, 25, NULL),
(119, true, '2021-04-20 17:00', 6, 25, NULL),
(120, true, '2021-04-20 18:00', 8, 25, NULL),
(121, true, '2021-04-21 19:00', 10, 25, NULL),
(122, true, '2021-04-21 20:00', 1, 25, NULL),
(123, true, '2021-04-22 21:00', 8, NULL, 26),
(124, true, '2021-04-22 22:00', 10, NULL, 26),
(125, true, '2021-04-23 23:00', 12, NULL, 26),
(126, true, '2021-04-23 10:00', 1, NULL, 26),
(127, true, '2021-04-24 11:00', 3, NULL, 26),
(128, false, '2021-04-24 12:00', 5, NULL, 26),
(129, true, '2021-04-25 13:00', 7, NULL, 26),
(130, false, '2021-04-25 14:00', 9, NULL, 26),
(131, true, '2021-04-26 15:00', 11, NULL, 26),
(132, true, '2021-04-26 16:00', 2, NULL, 26),
(133, true, '2021-04-27 17:00', 4, 19, NULL),
(134, true, '2021-04-27 18:00', 6, 19, NULL),
(135, true, '2021-04-28 19:00', 8, 19, NULL),
(136, true, '2021-04-28 20:00', 10, 19, NULL),
(137, true, '2021-04-29 21:00', 1, 19, NULL),
(138, false, '2021-04-29 22:00', 3, 19, NULL),
(139, true, '2021-04-30 23:00', 5, 19, NULL),
(140, false, '2021-04-30 10:00', 7, 19, NULL),
(141, true, '2021-05-01 11:00', 9, 19, NULL),
(142, true, '2021-05-01 12:00', 11, 19, NULL),
(143, true, '2021-05-02 13:00', 12, 20, NULL),
(144, true, '2021-05-02 14:00', 2, 20, NULL),
(145, true, '2021-05-03 15:00', 4, 20, NULL),
(146, true, '2021-05-03 16:00', 6, 20, NULL),
(147, true, '2021-05-04 17:00', 8, 20, NULL),
(148, false, '2021-05-04 18:00', 10, 20, NULL),
(149, true, '2021-05-05 19:00', 1, 20, NULL),
(150, false, '2021-05-05 20:00', 3, 20, NULL),
(151, true, '2021-05-06 21:00', 5, 20, NULL),
(152, true, '2021-05-06 22:00', 7, 20, NULL),
(153, true, '2021-05-07 23:00', 9, 20, NULL),
(154, true, '2021-05-07 10:00', 11, 20, NULL),
(155, true, '2021-05-08 11:00', 7, NULL, 30),
(156, true, '2021-05-08 12:00', 9, NULL, 30),
(157, true, '2021-05-09 13:00', 11, NULL, 30),
(158, true, '2021-05-09 14:00', 2, NULL, 30),
(159, true, '2021-05-10 15:00', 4, NULL, 30),
(160, false, '2021-05-10 16:00', 6, NULL, 30),
(161, true, '2021-05-11 17:00', 8, NULL, 30),
(162, false, '2021-05-11 18:00', 10, NULL, 30),
(163, true, '2021-05-12 19:00', 12, NULL, 30),
(164, true, '2021-05-12 20:00', 1, NULL, 30),
(165, true, '2021-05-13 21:00', 6, 23, NULL),
(166, true, '2021-05-13 22:00', 8, 23, NULL),
(167, true, '2021-05-14 23:00', 10, 23, NULL),
(168, true, '2021-05-14 10:00', 1, 23, NULL),
(169, true, '2021-05-15 11:00', 3, 23, NULL),
(170, false, '2021-05-15 12:00', 5, 23, NULL),
(171, true, '2021-05-16 13:00', 7, 23, NULL),
(172, false, '2021-05-16 14:00', 9, 23, NULL),
(173, true, '2021-05-17 15:00', 11, 23, NULL),
(174, true, '2021-05-17 16:00', 12, 23, NULL),
(175, true, '2021-05-18 17:00', 3, 8, NULL),
(176, true, '2021-05-18 18:00', 5, 8, NULL),
(177, true, '2021-05-19 19:00', 7, 8, NULL),
(178, true, '2021-05-19 20:00', 9, 8, NULL),
(179, true, '2021-05-20 21:00', 11, 8, NULL),
(180, false, '2021-05-20 22:00', 1, 8, NULL),
(181, true, '2021-05-21 23:00', 2, 8, NULL),
(182, false, '2021-05-21 10:00', 4, 8, NULL),
(183, true, '2021-05-22 11:00', 6, 8, NULL),
(184, true, '2021-05-22 12:00', 8, 8, NULL),
(185, true, '2021-05-23 13:00', 10, 8, NULL),
(186, true, '2021-05-23 14:00', 12, 8, NULL);

INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 2);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 4);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 5);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 6);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 7);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 8);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 9);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 10);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 11);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 12);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (1, 13);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (2, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (3, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (4, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (5, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (6, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (7, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (8, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (9, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (10, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (11, 2);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (12, 2);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (13, 2);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (2, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (4, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (5, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (6, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (7, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (8, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (9, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (10, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (11, 4);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (12, 4);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (13, 4);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (2, 5);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (3, 5);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (5, 6);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (6, 7);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (7, 8);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (8, 9);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (9, 10);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (10, 11);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (11, 5);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (12, 6);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (13, 7);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (2, 8);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (3, 9);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (4, 10);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (5, 11);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (6, 12);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (7, 13);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (8, 11);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (9, 12);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (10, 13);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (11, 8);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (12, 9);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (13, 10);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (2, 12);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (3, 13);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (5, 2);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (6, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (7, 4);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (8, 5);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (9, 6);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (10, 7);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (11, 9);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (12, 10);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (13, 11);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (2, 13);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (4, 2);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (5, 3);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (6, 4);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (7, 5);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (8, 6);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (9, 7);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (10, 8);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (11, 10);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (12, 11);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (13, 12);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (2, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (3, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (4, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (5, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (6, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (7, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (8, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (9, 1);
INSERT INTO user_subscriptions (user_id, subscription_id) VALUES (10, 1);
