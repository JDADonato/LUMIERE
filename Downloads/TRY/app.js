const initialMenu = [
    {"id":"m_mn3fs0e5icw","cat":"Starter","name":"French Fries","price":140,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Production_of_homemade_chips_%284%29.JPG/500px-Production_of_homemade_chips_%284%29.JPG","inStock":true},
    {"id":"m_mn3fs0e5qd5","cat":"Starter","name":"Cheese Sticks","price":180,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e5tyq","cat":"Starter","name":"Tokwa't Baboy","price":250,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Tokwa_at_Baboy.jpg/500px-Tokwa_at_Baboy.jpg","inStock":true},
    {"id":"m_mn3fs0e5vea","cat":"Starter","name":"Mangga't Alamang","price":240,"img":"https://loremflickr.com/400/300/Mangga't,food","inStock":true},
    {"id":"m_mn3fs0e5ylw","cat":"Starter","name":"Nachos","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e5irw","cat":"Starter","name":"Chicharong Bulaklak","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e57i6","cat":"Starter","name":"Sizzling Tofu","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Spam_wall_-_Flickr_-_freezelight.jpg/500px-Spam_wall_-_Flickr_-_freezelight.jpg","inStock":true},
    {"id":"m_mn3fs0e5g72","cat":"Starter","name":"Dynamite","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e5l2j","cat":"Starter","name":"Sizzling Corn","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Spam_wall_-_Flickr_-_freezelight.jpg/500px-Spam_wall_-_Flickr_-_freezelight.jpg","inStock":true},
    {"id":"m_mn3fs0e5gss","cat":"Starter","name":"Sizzling Hotdog","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Making_candied_fruit_in_Tianjin_China.JPG/500px-Making_candied_fruit_in_Tianjin_China.JPG","inStock":true},
    {"id":"m_mn3fs0e5nmc","cat":"Starter","name":"Chicken Skin","price":250,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e5jpt","cat":"Starter","name":"Chicken Feet","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Chicken_feet.jpg/500px-Chicken_feet.jpg","inStock":true},
    {"id":"m_mn3fs0e596g","cat":"Solo Meal","name":"Tapsilog","price":200,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Beef_tapa_with_steamed_rice_and_sliced_tomato_and_cucumber.jpg/500px-Beef_tapa_with_steamed_rice_and_sliced_tomato_and_cucumber.jpg","inStock":true},
    {"id":"m_mn3fs0e5zng","cat":"Solo Meal","name":"Tocilog","price":200,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e51ay","cat":"Solo Meal","name":"Hotsilog","price":200,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e57or","cat":"Solo Meal","name":"Bangsilog","price":200,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e5ucg","cat":"Solo Meal","name":"Wings with Rice","price":200,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/500px-Good_Food_Display_-_NCI_Visuals_Online.jpg","inStock":true},
    {"id":"m_mn3fs0e5wfb","cat":"Solo Meal","name":"Sisig with Rice","price":200,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e5i8f","cat":"Solo Meal","name":"2 Stick BBQ with Rice","price":210,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Puso_and_BBQ_Feast_-_Chicken_Skin%2C_Pork_Belly%2C_Chicken_Liver_and_Intestines.jpg/500px-Puso_and_BBQ_Feast_-_Chicken_Skin%2C_Pork_Belly%2C_Chicken_Liver_and_Intestines.jpg","inStock":true},
    {"id":"m_mn3fs0e5o75","cat":"Solo Meal","name":"Inasal with Rice","price":210,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mang_Inasal.svg/500px-Mang_Inasal.svg.png","inStock":true},
    {"id":"m_mn3fs0e5dhl","cat":"Solo Meal","name":"Rice","price":null,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e562y","cat":"Solo Meal","name":"","price":40,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6jw3","cat":"Solo Meal","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6syq","cat":"Solo Meal","name":"","price":140,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6w2o","cat":"Solo Meal","name":"Garlic Rice Bowl","price":150,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6i1s","cat":"Solo Meal","name":"Fried Rice Bowl","price":180,"img":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Beef_Pares.jpg/500px-Beef_Pares.jpg","inStock":true},
    {"id":"m_mn3fs0e6q2v","cat":"Vegetables","name":"Hototay","price":270,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chinese_Filipino.jpg/500px-Chinese_Filipino.jpg","inStock":true},
    {"id":"m_mn3fs0e6a4c","cat":"Vegetables","name":"Chopsuey","price":270,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/204Photos_taken_during_the_2020_coronavirus_pandemic_in_Meycauayan%2C_Bulacan_12.jpg/500px-204Photos_taken_during_the_2020_coronavirus_pandemic_in_Meycauayan%2C_Bulacan_12.jpg","inStock":true},
    {"id":"m_mn3fs0e6i2a","cat":"Vegetables","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6wrc","cat":"Vegetables","name":"","price":270,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e67c0","cat":"Vegetables","name":"Ampalaya Con Carne","price":270,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6nqw","cat":"Vegetables","name":"Gising-Gising","price":270,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sigarilyasjf1338.JPG/500px-Sigarilyasjf1338.JPG","inStock":true},
    {"id":"m_mn3fs0e62b0","cat":"Beef","name":"Bulalo","price":540,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/BULALO.jpg/500px-BULALO.jpg","inStock":true},
    {"id":"m_mn3fs0e68e2","cat":"Beef","name":"Sinigang na Baka","price":540,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/The_Best_Sinigang_Cuisine.jpg/500px-The_Best_Sinigang_Cuisine.jpg","inStock":true},
    {"id":"m_mn3fs0e6k5k","cat":"Beef","name":"Beef Kare-Kare","price":540,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mac_MG_5939.jpg/500px-Mac_MG_5939.jpg","inStock":true},
    {"id":"m_mn3fs0e6rjr","cat":"Beef","name":"Steak Bulalo","price":540,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e603n","cat":"Beef","name":"Kalderetang Baka","price":460,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Home_cooked_Kaldereta.jpg/500px-Home_cooked_Kaldereta.jpg","inStock":true},
    {"id":"m_mn3fs0e6okz","cat":"Beef","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6gz7","cat":"Beef","name":"","price":400,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6hny","cat":"Beef","name":"Beef with Youngcorn","price":400,"img":"https://loremflickr.com/400/300/Beef,food","inStock":true},
    {"id":"m_mn3fs0e6jv8","cat":"Beef","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6kld","cat":"Beef","name":"Crispy Pata","price":740,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Crispy_Pata_Pork.jpg/500px-Crispy_Pata_Pork.jpg","inStock":true},
    {"id":"m_mn3fs0e676j","cat":"Beef","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6fd8","cat":"Beef","name":"","price":490,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e65xt","cat":"Beef","name":"Sinigang na Baboy","price":490,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Adobo_DSCF4391.jpg/500px-Adobo_DSCF4391.jpg","inStock":true},
    {"id":"m_mn3fs0e6egb","cat":"Beef","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6xr5","cat":"Beef","name":"","price":290,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6ido","cat":"Beef","name":"Lechon Kawali","price":390,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lechon_Kawali.jpg/500px-Lechon_Kawali.jpg","inStock":true},
    {"id":"m_mn3fs0e6mxt","cat":"Beef","name":"Binagoongan","price":390,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/4336Cuisine_and_foods_of_Baliuag%2C_Bulacan_08.jpg/500px-4336Cuisine_and_foods_of_Baliuag%2C_Bulacan_08.jpg","inStock":true},
    {"id":"m_mn3fs0e6av8","cat":"Beef","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e66os","cat":"Beef","name":"","price":390,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e65km","cat":"Seafoods","name":"Sinigang na Salmon Ulo","price":440,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Toyo_at_kalamansi_%28toyomansi%29_with_siling_labuyo_%28Philippines%29_01.jpg/500px-Toyo_at_kalamansi_%28toyomansi%29_with_siling_labuyo_%28Philippines%29_01.jpg","inStock":true},
    {"id":"m_mn3fs0e6ypw","cat":"Seafoods","name":"Sinigang na Hipon","price":440,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/The_Best_Sinigang_Cuisine.jpg/500px-The_Best_Sinigang_Cuisine.jpg","inStock":true},
    {"id":"m_mn3fs0e6r2j","cat":"Seafoods","name":"Sinigang na Bangus","price":440,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/The_Best_Sinigang_Cuisine.jpg/500px-The_Best_Sinigang_Cuisine.jpg","inStock":true},
    {"id":"m_mn3fs0e6jdq","cat":"Seafoods","name":"Spicy Pusit","price":390,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Babbo-_Squid_Ink_pasta_with_green_chilis%2C_rock_shrimp_and_guanciale.jpg/500px-Babbo-_Squid_Ink_pasta_with_green_chilis%2C_rock_shrimp_and_guanciale.jpg","inStock":true},
    {"id":"m_mn3fs0e62wa","cat":"Seafoods","name":"Calamares","price":390,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6s6x","cat":"Seafoods","name":"Garlic Shrimp","price":390,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6k78","cat":"Seafoods","name":"Kilawing Tanigue","price":390,"img":"https://loremflickr.com/400/300/Kilawing,food","inStock":true},
    {"id":"m_mn3fs0e6udd","cat":"Seafoods","name":"Daing na Bangus","price":390,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6lqf","cat":"Seafoods","name":"Fried Hito","price":390,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e68tr","cat":"Seafoods","name":"Steam Pla-Pla","price":460,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Pla_thu831.jpg/500px-Pla_thu831.jpg","inStock":true},
    {"id":"m_mn3fs0e6cxq","cat":"Seafoods","name":"Sweet & Sour Tilapia","price":460,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6l3m","cat":"Seafoods","name":"Fried Tilapia","price":450,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Oreochromis-niloticus-Nairobi.JPG/500px-Oreochromis-niloticus-Nairobi.JPG","inStock":true},
    {"id":"m_mn3fs0e6fg9","cat":"Noodles","name":"Canton","price":250,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pancit_Ilonggo_Style_-_12110747826.jpg/500px-Pancit_Ilonggo_Style_-_12110747826.jpg","inStock":true},
    {"id":"m_mn3fs0e656z","cat":"Noodles","name":"Bihon","price":250,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6kol","cat":"Noodles","name":"Miki Bihon","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pancit_Ilonggo_Style_-_12110747826.jpg/500px-Pancit_Ilonggo_Style_-_12110747826.jpg","inStock":true},
    {"id":"m_mn3fs0e6fqi","cat":"Noodles","name":"Canton Bihon","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pancit_Ilonggo_Style_-_12110747826.jpg/500px-Pancit_Ilonggo_Style_-_12110747826.jpg","inStock":true},
    {"id":"m_mn3fs0e6snq","cat":"Noodles","name":"Lomi","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Batangas_Lomi.jpg/500px-Batangas_Lomi.jpg","inStock":true},
    {"id":"m_mn3fs0e6uzx","cat":"Chicken","name":"Buttered Chicken","price":590,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Churchs-logo.svg/500px-Churchs-logo.svg.png","inStock":true},
    {"id":"m_mn3fs0e6e39","cat":"Chicken","name":"Fried Chicken","price":550,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fried-Chicken-Set.jpg/500px-Fried-Chicken-Set.jpg","inStock":true},
    {"id":"m_mn3fs0e6epw","cat":"Chicken","name":"Chicken Sisig","price":280,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Authentic_Kapampangan_Sisig.jpg/500px-Authentic_Kapampangan_Sisig.jpg","inStock":true},
    {"id":"m_mn3fs0e69bx","cat":"Chicken","name":"Buffalo Wings","price":370,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lemon_Pepper_Chicken_Wings.jpg/500px-Lemon_Pepper_Chicken_Wings.jpg","inStock":true},
    {"id":"m_mn3fs0e6hut","cat":"Kambing","name":"Kalderetang Kambing","price":490,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Home_cooked_Kaldereta.jpg/500px-Home_cooked_Kaldereta.jpg","inStock":true},
    {"id":"m_mn3fs0e6ht0","cat":"Kambing","name":"Adobong Kambing","price":490,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Adobo_DSCF4391.jpg/500px-Adobo_DSCF4391.jpg","inStock":true},
    {"id":"m_mn3fs0e6seu","cat":"Kambing","name":"Kilawing Kambing","price":490,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kilawen_Kambing.jpg/500px-Kilawen_Kambing.jpg","inStock":true},
    {"id":"m_mn3fs0e6qme","cat":"Kambing","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6ncv","cat":"Kambing","name":"","price":490,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e69am","cat":"Kambing","name":"Inihaw","price":null,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Puso_and_BBQ_Feast_-_Chicken_Skin%2C_Pork_Belly%2C_Chicken_Liver_and_Intestines.jpg/500px-Puso_and_BBQ_Feast_-_Chicken_Skin%2C_Pork_Belly%2C_Chicken_Liver_and_Intestines.jpg","inStock":true},
    {"id":"m_mn3fs0e6asp","cat":"Kambing","name":" (Serving)","price":null,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6198","cat":"Kambing","name":" (6 sticks)","price":390,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6jb2","cat":"Kambing","name":"Chicken Inasal","price":290,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mang_Inasal.svg/500px-Mang_Inasal.svg.png","inStock":true},
    {"id":"m_mn3fs0e6zls","cat":"Kambing","name":"Beef Kebab","price":290,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/500px-Lula_kebab_2.jpg","inStock":true},
    {"id":"m_mn3fs0e6x8o","cat":"Kambing","name":"Liempo","price":350,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6pxg","cat":"Kambing","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e688y","cat":"Kambing","name":"","price":460,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6vt4","cat":"Kambing","name":"Bangus","price":420,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chanidae_-_Chanos_chanos.JPG/500px-Chanidae_-_Chanos_chanos.JPG","inStock":true},
    {"id":"m_mn3fs0e67gc","cat":"Kambing","name":"Tilapia","price":350,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Oreochromis-niloticus-Nairobi.JPG/500px-Oreochromis-niloticus-Nairobi.JPG","inStock":true},
    {"id":"m_mn3fs0e6r8c","cat":"Kambing","name":"Hito","price":350,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6vbm","cat":"Kambing","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6q6c","cat":"Kambing","name":"","price":350,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e65th","cat":"Bilao Boodle","name":"SB 1 (Good for 4-6 persons)","price":1799,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bini_at_Ibalong_Festival_September_2025.jpg/500px-Bini_at_Ibalong_Festival_September_2025.jpg","inStock":true},
    {"id":"m_mn3fs0e67ev","cat":"Bilao Boodle","name":"SB 2 (Good for 4-6 persons)","price":1799,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bini_at_Ibalong_Festival_September_2025.jpg/500px-Bini_at_Ibalong_Festival_September_2025.jpg","inStock":true},
    {"id":"m_mn3fs0e65ra","cat":"Bilao Boodle","name":"SB 3 (Good for 8-10 persons)","price":3299,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bini_at_Ibalong_Festival_September_2025.jpg/500px-Bini_at_Ibalong_Festival_September_2025.jpg","inStock":true},
    {"id":"m_mn3fs0e6x5a","cat":"Bilao Boodle","name":"SB 4 (Good for 8-10 persons)","price":3499,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bini_at_Ibalong_Festival_September_2025.jpg/500px-Bini_at_Ibalong_Festival_September_2025.jpg","inStock":true},
    {"id":"m_mn3fs0e6vvj","cat":"Breads","name":"Clubhouse","price":200,"img":"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Tropical_Hut_Scout_Borromeo.jpg/500px-Tropical_Hut_Scout_Borromeo.jpg","inStock":true},
    {"id":"m_mn3fs0e6mdu","cat":"Breads","name":"Tuna Melt","price":180,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e67vo","cat":"Breads","name":"Ham & Cheese Panini","price":180,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/500px-Good_Food_Display_-_NCI_Visuals_Online.jpg","inStock":true},
    {"id":"m_mn3fs0e6if0","cat":"Croffles - Sweet Flavor","name":"Classic","price":80,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6bvd","cat":"Croffles - Sweet Flavor","name":"Cinnamon Sugar","price":90,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cinnamon_roll_in_Stockholm.jpg/500px-Cinnamon_roll_in_Stockholm.jpg","inStock":true},
    {"id":"m_mn3fs0e6htw","cat":"Croffles - Sweet Flavor","name":"Nutella Alcapone","price":120,"img":"https://loremflickr.com/400/300/Nutella,food","inStock":true},
    {"id":"m_mn3fs0e6ibc","cat":"Croffles - Sweet Flavor","name":"Nutella Banana","price":120,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chicken_Noodle_Soup_US.jpg/500px-Chicken_Noodle_Soup_US.jpg","inStock":true},
    {"id":"m_mn3fs0e69xo","cat":"Croffles - Sweet Flavor","name":"Smores","price":130,"img":"https://loremflickr.com/400/300/Smores,food","inStock":true},
    {"id":"m_mn3fs0e68pk","cat":"Croffles - Sweet Flavor","name":"Blueberry Cream Cheese","price":130,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/500px-Good_Food_Display_-_NCI_Visuals_Online.jpg","inStock":true},
    {"id":"m_mn3fs0e6y72","cat":"Croffles - Sweet Flavor","name":"Croffles - Savory Flavor","price":null,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Waffles_with_Strawberries.jpg/500px-Waffles_with_Strawberries.jpg","inStock":true},
    {"id":"m_mn3fs0e60tz","cat":"Croffles - Sweet Flavor","name":"","price":150,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6uge","cat":"Croffles - Sweet Flavor","name":"Tuna Garlic Ranch","price":150,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hard_Rock_Cafe_French_Fries_01.jpg/500px-Hard_Rock_Cafe_French_Fries_01.jpg","inStock":true},
    {"id":"m_mn3fs0e63rf","cat":"Croffles - Sweet Flavor","name":"Chicken Floss","price":130,"img":"https://upload.wikimedia.org/wikipedia/commons/f/f4/Fragrance_Pork_Floss.jpg","inStock":true},
    {"id":"m_mn3fs0e64i5","cat":"Croffles - Sweet Flavor","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6nts","cat":"Croffles - Sweet Flavor","name":"","price":130,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6t6e","cat":"Croffles - Sweet Flavor","name":"Cheesy Nori","price":130,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/French_Fries.JPG/500px-French_Fries.JPG","inStock":true},
    {"id":"m_mn3fs0e65nd","cat":"Coffee","name":"Americano (Hot 12oz)","price":110,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Cody_Rhodes%2C_April_2024_%28cropped%29.jpg/500px-Cody_Rhodes%2C_April_2024_%28cropped%29.jpg","inStock":true},
    {"id":"m_mn3fs0e6clc","cat":"Coffee","name":"Americano (Hot 16oz)","price":125,"img":"https://loremflickr.com/400/300/Americano,food","inStock":true},
    {"id":"m_mn3fs0e6p2c","cat":"Coffee","name":"Americano (Iced 16oz)","price":125,"img":"https://loremflickr.com/400/300/Americano,food","inStock":true},
    {"id":"m_mn3fs0e6k5i","cat":"Coffee","name":"Americano (Iced 22oz)","price":135,"img":"https://loremflickr.com/400/300/Americano,food","inStock":true},
    {"id":"m_mn3fs0e6wt2","cat":"Coffee","name":"Cappuccino (Hot 12oz)","price":145,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Cody_Rhodes%2C_April_2024_%28cropped%29.jpg/500px-Cody_Rhodes%2C_April_2024_%28cropped%29.jpg","inStock":true},
    {"id":"m_mn3fs0e6ahk","cat":"Coffee","name":"Cappuccino (Hot 16oz)","price":160,"img":"https://loremflickr.com/400/300/Cappuccino,food","inStock":true},
    {"id":"m_mn3fs0e61o3","cat":"Coffee","name":"Cappuccino (Iced 16oz)","price":160,"img":"https://loremflickr.com/400/300/Cappuccino,food","inStock":true},
    {"id":"m_mn3fs0e6blb","cat":"Coffee","name":"Cappuccino (Iced 22oz)","price":175,"img":"https://loremflickr.com/400/300/Cappuccino,food","inStock":true},
    {"id":"m_mn3fs0e6fdh","cat":"Coffee","name":"Cafe Latte (Hot 12oz)","price":145,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e6liy","cat":"Coffee","name":"Cafe Latte (Hot 16oz)","price":160,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e6ii3","cat":"Coffee","name":"Cafe Latte (Iced 16oz)","price":160,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e690b","cat":"Coffee","name":"Cafe Latte (Iced 22oz)","price":175,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e6ssb","cat":"Coffee","name":"Spanish Latte (Hot 12oz)","price":150,"img":"https://loremflickr.com/400/300/Spanish,food","inStock":true},
    {"id":"m_mn3fs0e6xnt","cat":"Coffee","name":"Spanish Latte (Hot 16oz)","price":165,"img":"https://loremflickr.com/400/300/Spanish,food","inStock":true},
    {"id":"m_mn3fs0e6o3m","cat":"Coffee","name":"Spanish Latte (Iced 16oz)","price":165,"img":"https://loremflickr.com/400/300/Spanish,food","inStock":true},
    {"id":"m_mn3fs0e660l","cat":"Coffee","name":"Spanish Latte (Iced 22oz)","price":180,"img":"https://loremflickr.com/400/300/Spanish,food","inStock":true},
    {"id":"m_mn3fs0e63v7","cat":"Coffee","name":"Vanilla (Hot 12oz)","price":145,"img":"https://loremflickr.com/400/300/Vanilla,food","inStock":true},
    {"id":"m_mn3fs0e640w","cat":"Coffee","name":"Vanilla (Hot 16oz)","price":160,"img":"https://loremflickr.com/400/300/Vanilla,food","inStock":true},
    {"id":"m_mn3fs0e6931","cat":"Coffee","name":"Vanilla (Iced 16oz)","price":160,"img":"https://loremflickr.com/400/300/Vanilla,food","inStock":true},
    {"id":"m_mn3fs0e61zm","cat":"Coffee","name":"Vanilla (Iced 22oz)","price":175,"img":"https://loremflickr.com/400/300/Vanilla,food","inStock":true},
    {"id":"m_mn3fs0e60s5","cat":"Coffee","name":"Vanilla (Blended 16oz)","price":165,"img":"https://loremflickr.com/400/300/Vanilla,food","inStock":true},
    {"id":"m_mn3fs0e668k","cat":"Coffee","name":"Vanilla (Blended 22oz)","price":180,"img":"https://loremflickr.com/400/300/Vanilla,food","inStock":true},
    {"id":"m_mn3fs0e6hs6","cat":"Coffee","name":"Hazelnut (Hot 12oz)","price":145,"img":"https://loremflickr.com/400/300/Hazelnut,food","inStock":true},
    {"id":"m_mn3fs0e64yr","cat":"Coffee","name":"Hazelnut (Hot 16oz)","price":160,"img":"https://loremflickr.com/400/300/Hazelnut,food","inStock":true},
    {"id":"m_mn3fs0e6mqk","cat":"Coffee","name":"Hazelnut (Iced 16oz)","price":160,"img":"https://loremflickr.com/400/300/Hazelnut,food","inStock":true},
    {"id":"m_mn3fs0e6ktn","cat":"Coffee","name":"Hazelnut (Iced 22oz)","price":175,"img":"https://loremflickr.com/400/300/Hazelnut,food","inStock":true},
    {"id":"m_mn3fs0e6w60","cat":"Coffee","name":"Hazelnut (Blended 16oz)","price":165,"img":"https://loremflickr.com/400/300/Hazelnut,food","inStock":true},
    {"id":"m_mn3fs0e6en0","cat":"Coffee","name":"Hazelnut (Blended 22oz)","price":180,"img":"https://loremflickr.com/400/300/Hazelnut,food","inStock":true},
    {"id":"m_mn3fs0e6ihh","cat":"Coffee","name":"Cafe Mocha (Hot 12oz)","price":150,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e6w8a","cat":"Coffee","name":"Cafe Mocha (Hot 16oz)","price":165,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e6628","cat":"Coffee","name":"Cafe Mocha (Iced 16oz)","price":165,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e64cb","cat":"Coffee","name":"Cafe Mocha (Iced 22oz)","price":180,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e6tye","cat":"Coffee","name":"Cafe Mocha (Blended 16oz)","price":180,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e65e0","cat":"Coffee","name":"Cafe Mocha (Blended 22oz)","price":195,"img":"https://loremflickr.com/400/300/Cafe,food","inStock":true},
    {"id":"m_mn3fs0e6e8k","cat":"Coffee","name":"Caramel Macchiato (Hot 12oz)","price":150,"img":"https://loremflickr.com/400/300/Caramel,food","inStock":true},
    {"id":"m_mn3fs0e6paf","cat":"Coffee","name":"Caramel Macchiato (Hot 16oz)","price":165,"img":"https://loremflickr.com/400/300/Caramel,food","inStock":true},
    {"id":"m_mn3fs0e6l5k","cat":"Coffee","name":"Caramel Macchiato (Iced 16oz)","price":165,"img":"https://loremflickr.com/400/300/Caramel,food","inStock":true},
    {"id":"m_mn3fs0e66t5","cat":"Coffee","name":"Caramel Macchiato (Iced 22oz)","price":180,"img":"https://loremflickr.com/400/300/Caramel,food","inStock":true},
    {"id":"m_mn3fs0e6ei3","cat":"Coffee","name":"Caramel Macchiato (Blended 16oz)","price":180,"img":"https://loremflickr.com/400/300/Caramel,food","inStock":true},
    {"id":"m_mn3fs0e6bpy","cat":"Coffee","name":"Caramel Macchiato (Blended 22oz)","price":195,"img":"https://loremflickr.com/400/300/Caramel,food","inStock":true},
    {"id":"m_mn3fs0e6n6g","cat":"Coffee","name":"Salted Caramel (Hot 12oz)","price":150,"img":"https://loremflickr.com/400/300/Salted,food","inStock":true},
    {"id":"m_mn3fs0e6btt","cat":"Coffee","name":"Salted Caramel (Hot 16oz)","price":165,"img":"https://loremflickr.com/400/300/Salted,food","inStock":true},
    {"id":"m_mn3fs0e656k","cat":"Coffee","name":"Salted Caramel (Iced 16oz)","price":165,"img":"https://loremflickr.com/400/300/Salted,food","inStock":true},
    {"id":"m_mn3fs0e6zoy","cat":"Coffee","name":"Salted Caramel (Iced 22oz)","price":180,"img":"https://loremflickr.com/400/300/Salted,food","inStock":true},
    {"id":"m_mn3fs0e6s74","cat":"Coffee","name":"Salted Caramel (Blended 16oz)","price":180,"img":"https://loremflickr.com/400/300/Salted,food","inStock":true},
    {"id":"m_mn3fs0e6dsz","cat":"Coffee","name":"Salted Caramel (Blended 22oz)","price":195,"img":"https://loremflickr.com/400/300/Salted,food","inStock":true},
    {"id":"m_mn3fs0e6ekn","cat":"Coffee","name":"White Chocolate Mocha (Hot 12oz)","price":150,"img":"https://loremflickr.com/400/300/White,food","inStock":true},
    {"id":"m_mn3fs0e6sd3","cat":"Coffee","name":"White Chocolate Mocha (Hot 16oz)","price":165,"img":"https://loremflickr.com/400/300/White,food","inStock":true},
    {"id":"m_mn3fs0e6a7p","cat":"Coffee","name":"White Chocolate Mocha (Iced 16oz)","price":165,"img":"https://loremflickr.com/400/300/White,food","inStock":true},
    {"id":"m_mn3fs0e6th3","cat":"Coffee","name":"White Chocolate Mocha (Iced 22oz)","price":180,"img":"https://loremflickr.com/400/300/White,food","inStock":true},
    {"id":"m_mn3fs0e6izk","cat":"Coffee","name":"White Chocolate Mocha (Blended 16oz)","price":180,"img":"https://loremflickr.com/400/300/White,food","inStock":true},
    {"id":"m_mn3fs0e6sgr","cat":"Coffee","name":"White Chocolate Mocha (Blended 22oz)","price":195,"img":"https://loremflickr.com/400/300/White,food","inStock":true},
    {"id":"m_mn3fs0e6zz0","cat":"Ade Series","name":"Lychee Yakult 22oz","price":130,"img":"https://loremflickr.com/400/300/Lychee,food","inStock":true},
    {"id":"m_mn3fs0e6dwf","cat":"Ade Series","name":"Lemon Yakult 22oz","price":130,"img":"https://loremflickr.com/400/300/Lemon,food","inStock":true},
    {"id":"m_mn3fs0e6rkb","cat":"Ade Series","name":"Green Apple Soda 22oz","price":120,"img":"https://loremflickr.com/400/300/Green,food","inStock":true},
    {"id":"m_mn3fs0e69h9","cat":"Ade Series","name":"Blueberry Soda 22oz","price":120,"img":"https://loremflickr.com/400/300/Blueberry,food","inStock":true},
    {"id":"m_mn3fs0e6jax","cat":"Ade Series","name":"Strawberry Soda 22oz","price":120,"img":"https://loremflickr.com/400/300/Strawberry,food","inStock":true},
    {"id":"m_mn3fs0e6s4d","cat":"Non-Coffee","name":"Choco Seno (Iced 16oz)","price":175,"img":"https://loremflickr.com/400/300/Choco,food","inStock":true},
    {"id":"m_mn3fs0e6m48","cat":"Non-Coffee","name":"Choco Seno (Iced 22oz)","price":190,"img":"https://loremflickr.com/400/300/Choco,food","inStock":true},
    {"id":"m_mn3fs0e62bb","cat":"Non-Coffee","name":"Choco Seno (Blended 16oz)","price":175,"img":"https://loremflickr.com/400/300/Choco,food","inStock":true},
    {"id":"m_mn3fs0e6xze","cat":"Non-Coffee","name":"Choco Seno (Blended 22oz)","price":190,"img":"https://loremflickr.com/400/300/Choco,food","inStock":true},
    {"id":"m_mn3fs0e62m1","cat":"Non-Coffee","name":"Strawberry Cream (Iced 16oz)","price":175,"img":"https://loremflickr.com/400/300/Strawberry,food","inStock":true},
    {"id":"m_mn3fs0e6mc2","cat":"Non-Coffee","name":"Strawberry Cream (Iced 22oz)","price":190,"img":"https://loremflickr.com/400/300/Strawberry,food","inStock":true},
    {"id":"m_mn3fs0e6hqq","cat":"Non-Coffee","name":"Strawberry Cream (Blended 16oz)","price":175,"img":"https://loremflickr.com/400/300/Strawberry,food","inStock":true},
    {"id":"m_mn3fs0e6wry","cat":"Non-Coffee","name":"Strawberry Cream (Blended 22oz)","price":190,"img":"https://loremflickr.com/400/300/Strawberry,food","inStock":true},
    {"id":"m_mn3fs0e6a1n","cat":"Non-Coffee","name":"Cookies & Cream (Iced 16oz)","price":175,"img":"https://loremflickr.com/400/300/Cookies,food","inStock":true},
    {"id":"m_mn3fs0e6bor","cat":"Non-Coffee","name":"Cookies & Cream (Iced 22oz)","price":190,"img":"https://loremflickr.com/400/300/Cookies,food","inStock":true},
    {"id":"m_mn3fs0e64an","cat":"Non-Coffee","name":"Cookies & Cream (Blended 16oz)","price":175,"img":"https://loremflickr.com/400/300/Cookies,food","inStock":true},
    {"id":"m_mn3fs0e6e5h","cat":"Non-Coffee","name":"Cookies & Cream (Blended 22oz)","price":190,"img":"https://loremflickr.com/400/300/Cookies,food","inStock":true},
    {"id":"m_mn3fs0e659t","cat":"Non-Coffee","name":"Matcha (Iced 16oz)","price":175,"img":"https://loremflickr.com/400/300/Matcha,food","inStock":true},
    {"id":"m_mn3fs0e6lco","cat":"Non-Coffee","name":"Matcha (Iced 22oz)","price":190,"img":"https://loremflickr.com/400/300/Matcha,food","inStock":true},
    {"id":"m_mn3fs0e644u","cat":"Non-Coffee","name":"Matcha (Blended 16oz)","price":175,"img":"https://loremflickr.com/400/300/Matcha,food","inStock":true},
    {"id":"m_mn3fs0e67yg","cat":"Non-Coffee","name":"Matcha (Blended 22oz)","price":190,"img":"https://loremflickr.com/400/300/Matcha,food","inStock":true},
    {"id":"m_mn3fs0e66ic","cat":"Drinks","name":"Softdrinks 1.5L","price":170,"img":"https://loremflickr.com/400/300/Softdrinks,food","inStock":true},
    {"id":"m_mn3fs0e6d0y","cat":"Drinks","name":"Softdrinks Bottle","price":50,"img":"https://loremflickr.com/400/300/Softdrinks,food","inStock":true},
    {"id":"m_mn3fs0e68r4","cat":"Drinks","name":"Sago't Gulaman","price":100,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/JfBuffetsinthe9025PhilippinesBaliuagfvf_06.JPG/500px-JfBuffetsinthe9025PhilippinesBaliuagfvf_06.JPG","inStock":true},
    {"id":"m_mn3fs0e68vp","cat":"Drinks","name":"Mango Shake","price":170,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Mango_float_%28Crema_de_Mangga%29_-_Philippines.jpg/500px-Mango_float_%28Crema_de_Mangga%29_-_Philippines.jpg","inStock":true},
    {"id":"m_mn3fs0e698f","cat":"Drinks","name":"Lychee Shake","price":170,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Motherhood_and_apple_pie.jpg/500px-Motherhood_and_apple_pie.jpg","inStock":true},
    {"id":"m_mn3fs0e6kc5","cat":"Drinks","name":"Calamansi Juice","price":100,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Citrus_%C3%97_microcarpa_kz1.jpg/500px-Citrus_%C3%97_microcarpa_kz1.jpg","inStock":true},
    {"id":"m_mn3fs0e6c4x","cat":"Drinks","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6cws","cat":"Drinks","name":"","price":100,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6cba","cat":"Drinks","name":"Mango Juice","price":100,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/500px-Mangos_-_single_and_halved.jpg","inStock":true},
    {"id":"m_mn3fs0e6huu","cat":"Drinks","name":"Iced Tea Pitcher","price":120,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Making_candied_fruit_in_Tianjin_China.JPG/500px-Making_candied_fruit_in_Tianjin_China.JPG","inStock":true},
    {"id":"m_mn3fs0e61rx","cat":"Drinks","name":"Bottled Water","price":30,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6r73","cat":"Drinks","name":"Blue Lemonade Pitcher","price":120,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bamba_snack.jpg/500px-Bamba_snack.jpg","inStock":true},
    {"id":"m_mn3fs0e6h6e","cat":"Drinks","name":"Cucumber Pitcher","price":120,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Making_candied_fruit_in_Tianjin_China.JPG/500px-Making_candied_fruit_in_Tianjin_China.JPG","inStock":true},
    {"id":"m_mn3fs0e6yj6","cat":"Drinks","name":"Beers","price":null,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/San_Miguel_Beer-set.jpg/500px-San_Miguel_Beer-set.jpg","inStock":true},
    {"id":"m_mn3fs0e67q9","cat":"Drinks","name":"","price":100,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6ep7","cat":"Drinks","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6770","cat":"Drinks","name":"","price":590,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6w7v","cat":"Drinks","name":"San Mig Light Bottle","price":100,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6zqx","cat":"Drinks","name":"San Mig Light Bucket","price":590,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Fireworks_on_New_Year%27s_Eve_in_a_small_Swabian_village_%281%29%2C_brightened.jpg/500px-Fireworks_on_New_Year%27s_Eve_in_a_small_Swabian_village_%281%29%2C_brightened.jpg","inStock":true},
    {"id":"m_mn3fs0e6ws6","cat":"Drinks","name":"San Mig Apple Bottle","price":100,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Calpis_verre.jpg/500px-Calpis_verre.jpg","inStock":true},
    {"id":"m_mn3fs0e6u29","cat":"Drinks","name":"San Mig Apple Bucket","price":590,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Fireworks_on_New_Year%27s_Eve_in_a_small_Swabian_village_%281%29%2C_brightened.jpg/500px-Fireworks_on_New_Year%27s_Eve_in_a_small_Swabian_village_%281%29%2C_brightened.jpg","inStock":true},
    {"id":"m_mn3fs0e6ufn","cat":"Drinks","name":"Red Horse Bottle","price":110,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6mbv","cat":"Drinks","name":"Red Horse Bucket","price":650,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cooked_corned_beef.JPG/500px-Cooked_corned_beef.JPG","inStock":true},
    {"id":"m_mn3fs0e6ika","cat":"Drinks","name":"Smirnoff Mule Bottle","price":120,"img":"https://loremflickr.com/400/300/Smirnoff,food","inStock":true},
    {"id":"m_mn3fs0e6js6","cat":"Drinks","name":"Smirnoff Mule Bucket","price":710,"img":"https://loremflickr.com/400/300/Smirnoff,food","inStock":true},
    {"id":"m_mn3fs0e6b9i","cat":"Drinks","name":"Heineken Bottle","price":120,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6swg","cat":"Drinks","name":"Heineken Bucket","price":710,"img":"https://loremflickr.com/400/300/Heineken,food","inStock":true},
    {"id":"m_mn3fs0e634g","cat":"Liquors","name":"Jack Daniels 1L","price":3900,"img":"https://upload.wikimedia.org/wikipedia/commons/3/3e/WSVN_7_Miami_logo.png","inStock":true},
    {"id":"m_mn3fs0e6j0w","cat":"Liquors","name":"Black Label 1L","price":3900,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/WMAP_2012.png/500px-WMAP_2012.png","inStock":true},
    {"id":"m_mn3fs0e625k","cat":"Liquors","name":"Jose Cuervo 1L","price":2800,"img":"https://loremflickr.com/400/300/Jose,food","inStock":true},
    {"id":"m_mn3fs0e68t8","cat":"Liquors","name":"Absolut Vodka 1L","price":2500,"img":"https://loremflickr.com/400/300/Absolut,food","inStock":true},
    {"id":"m_mn3fs0e66uu","cat":"Liquors","name":"Fundador Light 1L","price":900,"img":"https://loremflickr.com/400/300/Fundador,food","inStock":true},
    {"id":"m_mn3fs0e60og","cat":"Liquors","name":"Alfonso Light 1L","price":900,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Microplastics_in_sediments.jpg/500px-Microplastics_in_sediments.jpg","inStock":true},
    {"id":"m_mn3fs0e6e46","cat":"Liquors","name":"Carlo Rossi 75cl","price":900,"img":"https://loremflickr.com/400/300/Carlo,food","inStock":true},
    {"id":"m_mn3fs0e6y2l","cat":"House Special","name":"Affogato (Hot 12oz)","price":170,"img":"https://loremflickr.com/400/300/Affogato,food","inStock":true},
    {"id":"m_mn3fs0e6ckp","cat":"House Special","name":"Affogato (Hot 22oz)","price":190,"img":"https://loremflickr.com/400/300/Affogato,food","inStock":true},
    {"id":"m_mn3fs0e6nv7","cat":"House Special","name":"Affogato (Iced 16oz)","price":190,"img":"https://loremflickr.com/400/300/Affogato,food","inStock":true},
    {"id":"m_mn3fs0e6ygb","cat":"House Special","name":"Affogato (Iced 22oz)","price":210,"img":"https://loremflickr.com/400/300/Affogato,food","inStock":true},
    {"id":"m_mn3fs0e64nh","cat":"House Special","name":"Affogato (Blended 16oz)","price":210,"img":"https://loremflickr.com/400/300/Affogato,food","inStock":true},
    {"id":"m_mn3fs0e6pev","cat":"House Special","name":"Affogato (Blended 22oz)","price":220,"img":"https://loremflickr.com/400/300/Affogato,food","inStock":true},
    {"id":"m_mn3fs0e6gij","cat":"House Special","name":"Dolce (Hot 12oz)","price":170,"img":"https://loremflickr.com/400/300/Dolce,food","inStock":true},
    {"id":"m_mn3fs0e6sck","cat":"House Special","name":"Dolce (Hot 22oz)","price":190,"img":"https://loremflickr.com/400/300/Dolce,food","inStock":true},
    {"id":"m_mn3fs0e6lkx","cat":"House Special","name":"Dolce (Iced 16oz)","price":190,"img":"https://loremflickr.com/400/300/Dolce,food","inStock":true},
    {"id":"m_mn3fs0e6teh","cat":"House Special","name":"Dolce (Iced 22oz)","price":210,"img":"https://loremflickr.com/400/300/Dolce,food","inStock":true},
    {"id":"m_mn3fs0e6n5f","cat":"House Special","name":"Dolce (Blended 16oz)","price":210,"img":"https://loremflickr.com/400/300/Dolce,food","inStock":true},
    {"id":"m_mn3fs0e68x6","cat":"House Special","name":"Dolce (Blended 22oz)","price":220,"img":"https://loremflickr.com/400/300/Dolce,food","inStock":true},
    {"id":"m_mn3fs0e6w2k","cat":"House Special","name":"Biscoff Coffee (Hot 12oz)","price":170,"img":"https://loremflickr.com/400/300/Biscoff,food","inStock":true},
    {"id":"m_mn3fs0e6lsh","cat":"House Special","name":"Biscoff Coffee (Hot 22oz)","price":190,"img":"https://loremflickr.com/400/300/Biscoff,food","inStock":true},
    {"id":"m_mn3fs0e6aky","cat":"House Special","name":"Biscoff Coffee (Iced 16oz)","price":190,"img":"https://loremflickr.com/400/300/Biscoff,food","inStock":true},
    {"id":"m_mn3fs0e61ek","cat":"House Special","name":"Biscoff Coffee (Iced 22oz)","price":210,"img":"https://loremflickr.com/400/300/Biscoff,food","inStock":true},
    {"id":"m_mn3fs0e61w1","cat":"House Special","name":"Biscoff Coffee (Blended 16oz)","price":210,"img":"https://loremflickr.com/400/300/Biscoff,food","inStock":true},
    {"id":"m_mn3fs0e6w8h","cat":"House Special","name":"Biscoff Coffee (Blended 22oz)","price":220,"img":"https://loremflickr.com/400/300/Biscoff,food","inStock":true},
    {"id":"m_mn3fs0e6vky","cat":"House Special","name":"Cheesecake Latte (Hot 12oz)","price":170,"img":"https://loremflickr.com/400/300/Cheesecake,food","inStock":true},
    {"id":"m_mn3fs0e69u0","cat":"House Special","name":"Cheesecake Latte (Hot 22oz)","price":190,"img":"https://loremflickr.com/400/300/Cheesecake,food","inStock":true},
    {"id":"m_mn3fs0e6tut","cat":"House Special","name":"Cheesecake Latte (Iced 16oz)","price":190,"img":"https://loremflickr.com/400/300/Cheesecake,food","inStock":true},
    {"id":"m_mn3fs0e6gpj","cat":"House Special","name":"Cheesecake Latte (Iced 22oz)","price":210,"img":"https://loremflickr.com/400/300/Cheesecake,food","inStock":true},
    {"id":"m_mn3fs0e6h5d","cat":"House Special","name":"Cheesecake Latte (Blended 16oz)","price":210,"img":"https://loremflickr.com/400/300/Cheesecake,food","inStock":true},
    {"id":"m_mn3fs0e6g23","cat":"House Special","name":"Cheesecake Latte (Blended 22oz)","price":220,"img":"https://loremflickr.com/400/300/Cheesecake,food","inStock":true},
    {"id":"m_mn3fs0e6ugi","cat":"House Special","name":"Ube Halaya (Hot 12oz)","price":170,"img":"https://loremflickr.com/400/300/Ube,food","inStock":true},
    {"id":"m_mn3fs0e6rli","cat":"House Special","name":"Ube Halaya (Hot 22oz)","price":190,"img":"https://loremflickr.com/400/300/Ube,food","inStock":true},
    {"id":"m_mn3fs0e6x9v","cat":"House Special","name":"Ube Halaya (Iced 16oz)","price":190,"img":"https://loremflickr.com/400/300/Ube,food","inStock":true},
    {"id":"m_mn3fs0e6cj3","cat":"House Special","name":"Ube Halaya (Iced 22oz)","price":210,"img":"https://loremflickr.com/400/300/Ube,food","inStock":true},
    {"id":"m_mn3fs0e636b","cat":"House Special","name":"Ube Halaya (Blended 16oz)","price":210,"img":"https://loremflickr.com/400/300/Ube,food","inStock":true},
    {"id":"m_mn3fs0e6mgx","cat":"House Special","name":"Ube Halaya (Blended 22oz)","price":220,"img":"https://loremflickr.com/400/300/Ube,food","inStock":true},
    {"id":"m_mn3fs0e6620","cat":"House Special","name":"Dirty Matcha (Hot 12oz)","price":170,"img":"https://loremflickr.com/400/300/Dirty,food","inStock":true},
    {"id":"m_mn3fs0e6h7u","cat":"House Special","name":"Dirty Matcha (Hot 22oz)","price":190,"img":"https://loremflickr.com/400/300/Dirty,food","inStock":true},
    {"id":"m_mn3fs0e6l6x","cat":"House Special","name":"Dirty Matcha (Iced 16oz)","price":190,"img":"https://loremflickr.com/400/300/Dirty,food","inStock":true},
    {"id":"m_mn3fs0e6g57","cat":"House Special","name":"Dirty Matcha (Iced 22oz)","price":210,"img":"https://loremflickr.com/400/300/Dirty,food","inStock":true},
    {"id":"m_mn3fs0e6swz","cat":"House Special","name":"Dirty Matcha (Blended 16oz)","price":210,"img":"https://loremflickr.com/400/300/Dirty,food","inStock":true},
    {"id":"m_mn3fs0e64pf","cat":"House Special","name":"Dirty Matcha (Blended 22oz)","price":220,"img":"https://loremflickr.com/400/300/Dirty,food","inStock":true},
    {"id":"m_mn3fs0e6z9l","cat":"Add Ons","name":"Espresso Shot","price":50,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/500px-Latte_and_dark_coffee.jpg","inStock":true},
    {"id":"m_mn3fs0e65eo","cat":"Add Ons","name":"Sauce","price":30,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Filipino_Spaghetti_2.0.jpg/500px-Filipino_Spaghetti_2.0.jpg","inStock":true},
    {"id":"m_mn3fs0e6n43","cat":"Add Ons","name":"Syrup","price":30,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e60oj","cat":"Ade Series - Add Ons","name":"Coconut Jelly","price":30,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Philippine_Food.jpg/500px-Philippine_Food.jpg","inStock":true},
    {"id":"m_mn3fs0e6gos","cat":"Ade Series - Add Ons","name":"","price":null,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6ptp","cat":"Ade Series - Add Ons","name":"","price":30,"img":"https://picsum.photos/seed//300/200","inStock":true},
    {"id":"m_mn3fs0e6jux","cat":"Ade Series - Add Ons","name":"Vanilla Ice Cream","price":50,"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ube_Ice_Cream_%28Philippines%29_02.jpg/500px-Ube_Ice_Cream_%28Philippines%29_02.jpg","inStock":true}
];

const defaultSettings = {
    serviceChargePercent: 10,
    extensionFee: 100,
    maxTables: 20
};

const Librarian = {
    get: (key, fallback) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch(e) { return fallback; }
    },
    set: (key, val) => {
        try { localStorage.setItem(key, JSON.stringify(val)); } 
        catch(e) { console.error('Librarian Write Error', e); }
    }
};

// Initialize DBs
const cleanMenu = initialMenu.filter(m => m.price !== null && m.name && m.name.trim() !== '' && m.cat !== m.name.trim());
Librarian.set('sr_menuInventory', cleanMenu);
if (!localStorage.getItem('sr_activeTables')) Librarian.set('sr_activeTables', []);
if (!localStorage.getItem('sr_analyticsData')) Librarian.set('sr_analyticsData', []);
if (!localStorage.getItem('sr_settings')) Librarian.set('sr_settings', defaultSettings);

let currentTableId = null;
let cart = [];
let activeCategory = 'All';
let activeStockCategory = 'All';
let timerInterval = null;
let menuCurrentPage = 1;
const ITEMS_PER_PAGE = 20;

let kdsCurrentPage = 1;
const KDS_ITEMS_PER_PAGE = 8;
let stockCurrentPage = 1;
const STOCK_ITEMS_PER_PAGE = 12;
let adminCurrentPage = 1;
const ADMIN_ITEMS_PER_PAGE = 5;
let adminSearchTerm = '';

const Executive = {
    init() {
        this.bindNav();
        this.bindReservation();
        this.bindCart();
        this.bindDashboard();
        this.bindSurvey();
        this.bindStaff();
        this.bindAdmin();

        if (Librarian.get('sr_analyticsData', []).length < 50 || Librarian.get('sr_activeTables', []).length < 4) {
            this.injectSimulatedData();
        }
        
        this.renderMenu();
        this.updateGlobalSettings();
        this.calculateCapacity();
        this.renderCustomerMap();
        
        window.addEventListener('storage', (e) => {
            if(e.key === 'sr_menuInventory') this.renderMenu();
            if(e.key === 'sr_settings') this.updateGlobalSettings();
            if(e.key === 'sr_activeTables') {
                this.calculateCapacity();
                if (document.getElementById('view-staff-hub').classList.contains('active')) {
                    this.renderStaffPOS();
                    this.renderKDS();
                }
            }
        });

        const savedSession = localStorage.getItem('sr_currentSession');
        let sessionRestored = false;
        if(savedSession) {
             const tables = Librarian.get('sr_activeTables', []);
             const stillActive = tables.find(t => t.id === savedSession && !t.needsCleaning);
             if(stillActive) {
                  currentTableId = savedSession;
                  document.getElementById('nav-btn-dash').classList.remove('hidden');
                  
                  const btnBook = document.getElementById('btn-cta-book');
                  const btnCont = document.getElementById('btn-cta-continue');
                  if (btnBook && btnCont) {
                       btnBook.classList.add('hidden');
                       btnCont.classList.remove('hidden');
                  }

                  sessionRestored = true;
             } else {
                  localStorage.removeItem('sr_currentSession');
             }
        }

        const authRole = localStorage.getItem('sr_authRole');
        if(authRole === 'admin') {
            document.getElementById('nav-admin').classList.remove('hidden');
        }

        const savedView = localStorage.getItem('sr_currentView') || 'view-landing';
        const savedStaffView = localStorage.getItem('sr_currentStaffView') || 'staff-pos';

        if(savedView === 'view-staff-hub' && (!authRole || authRole === 'none')) {
             this.navTo('view-landing');
        } else if ((savedView === 'view-dashboard' || savedView === 'view-survey') && !sessionRestored) {
             this.navTo('view-landing');
        } else {
             if(savedView === 'view-staff-hub') this.switchStaffView(savedStaffView);
             this.navTo(savedView);
        }
    },

    updateGlobalSettings() {
        const s = Librarian.get('sr_settings', defaultSettings);
        document.getElementById('policy-sc-rate').innerText = s.serviceChargePercent;
        document.getElementById('cart-sc-lbl').innerText = s.serviceChargePercent;
        document.getElementById('dash-sc-rate').innerText = s.serviceChargePercent;
        document.getElementById('btn-extend-time').innerText = `Authorize Extension (+${s.extensionFee} PHP)`;
    },

    navTo(viewId) {
        let targetId = viewId;
        let activeView = document.getElementById(targetId);
        
        // Auto-recover if local storage state is corrupted
        if(!activeView) {
             targetId = 'view-landing';
             activeView = document.getElementById(targetId);
        }

        localStorage.setItem('sr_currentView', targetId);
        document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        
        if(activeView) {
             activeView.classList.remove('hidden');
             activeView.classList.add('active');
        }
        
        const fab = document.getElementById('fab-cart');
        if (fab) {
             if(targetId === 'view-menu') fab.classList.remove('hidden');
             else fab.classList.add('hidden');
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const footer = document.getElementById('global-footer');
        if(footer) footer.style.display = targetId === 'view-staff-hub' ? 'none' : 'block';
    },

    confirmModal(title, msg, onConfirm, okText = 'Continue', cancelText = 'Cancel') {
        const modal = document.getElementById('confirm-modal');
        document.getElementById('confirm-title').innerText = title;
        document.getElementById('confirm-msg').innerText = msg;
        
        const btnYes = document.getElementById('btn-confirm-yes');
        const btnNo = document.getElementById('btn-confirm-no');
        
        btnYes.innerText = okText;
        btnNo.innerText = cancelText;

        const close = () => modal.classList.add('hidden');
        
        btnYes.onclick = () => { close(); onConfirm(); };
        btnNo.onclick = () => close();

        modal.classList.remove('hidden');
    },

    toast(msg, type = 'success') {
        const t = document.createElement('div');
        t.className = `toast toast-${type}`;
        t.innerHTML = `<span>${msg}</span> <button class="toast-close">&times;</button>`;
        
        if(type==='warning') {
             t.style.background = 'var(--color-banana-yellow)';
             t.style.color = 'var(--text-black-serif)';
             t.querySelector('.toast-close').style.color = 'var(--text-black-serif)';
        }

        t.querySelector('.toast-close').onclick = () => {
             t.classList.remove('show');
             setTimeout(() => t.remove(), 400);
        };

        document.getElementById('toast-container').appendChild(t);
        requestAnimationFrame(() => t.classList.add('show'));
        
        setTimeout(() => {
            if(document.body.contains(t)) {
                t.classList.remove('show');
                setTimeout(() => t.remove(), 400);
            }
        }, 5000);
    },

    // --- LANDING ---
    calculateCapacity() {
        const tables = Librarian.get('sr_activeTables', []);
        const s = Librarian.get('sr_settings', defaultSettings);
        const avail = s.maxTables - tables.length;
        
        const el = document.getElementById('cap-status');
        const dot = document.querySelector('.indicator-dot');
        
        if (avail <= 0) {
            el.innerText = 'At Full Capacity';
            dot.style.background = 'var(--color-danger)';
        } else if (avail <= 5) {
            el.innerText = 'Filling Fast (' + avail + ' left)';
            dot.style.background = 'var(--color-banana-yellow)';
        } else {
            el.innerText = 'Available';
            dot.style.background = 'var(--color-leaf-green)';
        }
    },

    bindNav() {
        document.getElementById('nav-btn-home').onclick = () => this.navTo('view-landing');
        const navLogo = document.querySelector('.logo');
        if(navLogo) navLogo.onclick = () => this.navTo('view-landing');
        
        document.getElementById('btn-cta-book').onclick = () => {
            this.navTo('view-reservation');
            this.renderCustomerMap();
        };

        const btnCont = document.getElementById('btn-cta-continue');
        if(btnCont) {
             btnCont.onclick = () => {
                  if(currentTableId) {
                      const tables = Librarian.get('sr_activeTables', []);
                      const t = tables.find(tb => tb.id === currentTableId);
                      if(t) this.startDashboard(t);
                      this.navTo('view-dashboard');
                  }
             };
        }
        document.getElementById('btn-cta-menu').onclick = () => this.navTo('view-menu');
        
        document.getElementById('fab-cart').onclick = () => {
            document.getElementById('cart-sidebar').classList.add('open');
            document.body.classList.add('cart-open');
        };
        
        const cSearch = document.getElementById('customer-menu-search');
        if (cSearch) {
             cSearch.oninput = (e) => {
                 menuCurrentPage = 1;
                 this.renderMenu(e.target.value);
             };
        }

        document.getElementById('nav-btn-staff').onclick = () => {
             document.getElementById('staff-auth-modal').classList.remove('hidden');
        };
        
        document.getElementById('btn-staff-cancel').onclick = () => {
            document.getElementById('staff-auth-modal').classList.add('hidden');
            document.getElementById('staff-pin').value = '';
        };

        document.getElementById('btn-staff-login').onclick = () => {
            const pin = document.getElementById('staff-pin').value;
            if (pin === 'staff123' || pin === 'admin123') {
                localStorage.setItem('sr_authRole', pin === 'admin123' ? 'admin' : 'staff');
                document.getElementById('staff-auth-modal').classList.add('hidden');
                document.getElementById('staff-pin').value = '';
                this.navTo('view-staff-hub');
                
                if(pin === 'admin123') {
                    document.getElementById('nav-admin').classList.remove('hidden');
                } else {
                    document.getElementById('nav-admin').classList.add('hidden');
                }

                this.renderStaffPOS();
            } else {
                this.toast('Invalid Gateway PIN.', 'warning');
            }
        };

        document.getElementById('nav-pos').onclick = () => this.switchStaffView('staff-pos', 'nav-pos');
        document.getElementById('nav-kds').onclick = () => {
            this.switchStaffView('staff-kds', 'nav-kds');
            this.renderKDS();
        };
        document.getElementById('nav-stock').onclick = () => {
            this.switchStaffView('staff-stock', 'nav-stock');
            this.renderStockTracker();
        };
        document.getElementById('nav-admin').onclick = () => {
            this.switchStaffView('staff-admin', 'nav-admin');
            this.renderAdmin();
        };
        document.getElementById('nav-logout').onclick = () => {
            localStorage.removeItem('sr_authRole');
            localStorage.removeItem('sr_currentView');
            localStorage.removeItem('sr_currentStaffView');
            this.navTo('view-landing');
            this.toast('Securely Logged Out', 'success');
        };

        document.getElementById('nav-btn-dash').onclick = () => {
             if(currentTableId) {
                 const tables = Librarian.get('sr_activeTables', []);
                 const t = tables.find(tb => tb.id === currentTableId);
                 if(t) this.startDashboard(t);
                 this.navTo('view-dashboard');
             }
        };

        document.getElementById('btn-close-cart').onclick = () => {
            document.getElementById('cart-sidebar').classList.remove('open');
            document.body.classList.remove('cart-open');
        };
    },

    switchStaffView(subViewId, navBtnId = null) {
        localStorage.setItem('sr_currentStaffView', subViewId);
        document.querySelectorAll('.staff-subview').forEach(v => v.classList.add('hidden'));
        document.querySelectorAll('.staff-nav button').forEach(b => {
             if(b.id !== 'nav-logout'){
                 b.classList.remove('active-tab');
             }
        });
        const viewParts = document.getElementById(subViewId);
        if(viewParts) {
            viewParts.classList.remove('hidden');
            let btnTarget = navBtnId;
            if(!btnTarget) {
                 const btnMap = { 'staff-pos': 'nav-pos', 'staff-kds': 'nav-kds', 'staff-admin': 'nav-admin', 'staff-stock': 'nav-stock' };
                 btnTarget = btnMap[subViewId];
            }
            const navBtn = document.getElementById(btnTarget);
            if(navBtn) {
                 navBtn.classList.add('active-tab');
            }
        }
    },

    // --- RESERVATION ---
    renderCustomerMap() {
        const grid = document.getElementById('customer-floor-map');
        grid.innerHTML = '';
        const tables = Librarian.get('sr_activeTables', []);
        
        const qz = document.createElement('div');
        qz.style.gridColumn = '1 / -1';
        qz.innerHTML = '<h4 style="margin: 0.5rem 0 0.5rem 0; color:var(--text-black-serif)">Quiet Zone (Non-Smoking)</h4>';
        grid.appendChild(qz);
        
        for(let i=1; i<=6; i++){ grid.appendChild(this.buildCustomerTableBlock(i, tables, 'Quiet and Non-Smoking Zone')); }
        
        const ez = document.createElement('div');
        ez.style.gridColumn = '1 / -1';
        ez.innerHTML = '<h4 style="margin: 1.5rem 0 0.5rem 0; color:var(--text-black-serif)">Entertainment Zone (Live Band)</h4>';
        grid.appendChild(ez);
        
        for(let i=7; i<=12; i++){ grid.appendChild(this.buildCustomerTableBlock(i, tables, 'Entertainment and Karaoke Zone')); }
    },

    buildCustomerTableBlock(i, tables, zoneName) {
        const isTaken = tables.find(t => t.tableNumber === i);
        const d = document.createElement('div');
        d.className = 'map-table customer-table';
        if(isTaken) {
             d.innerHTML = `T${i}<br><span style="color:#999; font-size:0.75rem; font-weight:600">Occupied</span>`;
             d.classList.add('taken');
        } else {
             d.innerHTML = `T${i}<br><span style="color:var(--color-leaf-green); font-size:0.75rem; font-weight:600">Available</span>`;
             d.dataset.tableNum = i;
             d.dataset.zone = zoneName;
             d.onclick = () => {
                  document.querySelectorAll('.customer-table.selected').forEach(el => el.classList.remove('selected'));
                  d.classList.add('selected');
                  document.getElementById('res-selected-table').value = i;
                  document.getElementById('res-selected-zone').value = zoneName;
                  
                  const disp = document.getElementById('selected-table-display');
                  disp.innerText = `Selected: Table ${i} (${zoneName})`;
                  disp.style.background = 'var(--text-black-serif)';
                  disp.style.color = 'var(--color-banana-yellow)';
                  disp.style.borderColor = 'var(--text-black-serif)';
                  
                  const form = document.getElementById('reservation-form');
                  document.getElementById('btn-submit-res').disabled = !form.checkValidity();
             };
        }
        return d;
    },

    bindReservation() {
        const checkForm = () => {
            const form = document.getElementById('reservation-form');
            const tablePicked = document.getElementById('res-selected-table').value;
            const btn = document.getElementById('btn-submit-res');
            btn.disabled = !(form.checkValidity() && tablePicked);
        };

        document.getElementById('reservation-form').addEventListener('input', checkForm);

        document.getElementById('reservation-form').onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('res-name').value;
            const tablePicked = parseInt(document.getElementById('res-selected-table').value);
            const env = document.getElementById('res-selected-zone').value;
            
            const tables = Librarian.get('sr_activeTables', []);
            
            const newSession = {
                id: 'sess_' + Date.now().toString(36),
                tableNumber: tablePicked,
                customerName: name,
                zone: env,
                orderedItems: [],
                subtotal: 0,
                serviceCharge: 0,
                extensionFee: 0,
                total: 0,
                timeSeated: Date.now(),
                needsWaiter: false,
                needsCleaning: false,
            };

            tables.push(newSession);
            Librarian.set('sr_activeTables', tables);
            
            currentTableId = newSession.id;
            localStorage.setItem('sr_currentSession', currentTableId);
            
            document.getElementById('nav-btn-dash').classList.remove('hidden');
            
            this.navTo('view-menu');
            this.toast(`Table ${tablePicked} Secured! Opening Menu...`, 'success');
            
            // Reset Form and visuals
            document.getElementById('reservation-form').reset();
            document.getElementById('btn-submit-res').disabled = true;
            const disp = document.getElementById('selected-table-display');
            disp.innerText = 'No Table Selected. Please tap an available table below.';
            disp.style.background = '#fafafa';
            disp.style.color = 'inherit';
            disp.style.borderColor = '#ddd';
        };
    },

    // --- MENU & CART ---
    renderMenu(searchQuery = '') {
        const menu = Librarian.get('sr_menuInventory', initialMenu);
        const categories = ['All', ...new Set(menu.map(i => i.cat))];
        
        const filtersDiv = document.getElementById('cat-filters');
        filtersDiv.innerHTML = '';
        categories.forEach(c => {
            const btn = document.createElement('button');
            btn.className = `cat-pill ${c === activeCategory ? 'active' : ''}`;
            btn.innerText = c;
            btn.onclick = () => {
                activeCategory = c;
                menuCurrentPage = 1;
                this.renderMenu(document.getElementById('customer-menu-search')?.value || '');
            };
            filtersDiv.appendChild(btn);
        });

        const grid = document.getElementById('menu-grid');
        grid.innerHTML = '';
        
        const filteredMenu = activeCategory === 'All' ? menu : menu.filter(i => i.cat === activeCategory);
        let validItems = filteredMenu.filter(i => i.price !== null && i.name && i.name.trim() !== '' && i.cat !== i.name.trim());
        
        if (searchQuery.trim() !== '') {
            validItems = validItems.filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        
        const emptyState = document.getElementById('customer-menu-empty');
        if (emptyState) {
            if (validItems.length === 0) emptyState.classList.remove('hidden');
            else emptyState.classList.add('hidden');
        }
        
        const totalPages = Math.ceil(validItems.length / ITEMS_PER_PAGE);
        if(menuCurrentPage > totalPages) menuCurrentPage = 1;
        if(menuCurrentPage < 1) menuCurrentPage = 1;
        
        const startIndex = (menuCurrentPage - 1) * ITEMS_PER_PAGE;
        const paginatedItems = validItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        
        paginatedItems.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = `menu-item-card ${item.inStock ? '' : 'disabled'}`;
            card.style.animation = 'slideUp 0.4s ease forwards';
            card.style.animationDelay = `${idx * 0.05}s`;
            card.style.opacity = '0';
            
            card.innerHTML = `
                ${!item.inStock ? '<div class="badge-warning"><i class="fa-solid fa-triangle-exclamation"></i> Out of Stock</div>' : ''}
                <div class="menu-img" style="background-image: url('${item.img}')"></div>
                <div class="menu-details">
                    <div>
                        <h4 style="color:#888; margin:0 0 0.25rem 0; font-size:0.8rem; text-transform:uppercase">${item.cat}</h4>
                        <h3>${item.name}</h3>
                    </div>
                    <div>
                        <div class="price">PHP ${item.price.toFixed(2)}</div>
                        <button class="${item.inStock ? 'btn-green' : 'btn-secondary'}" style="width:100%" ${item.inStock ? '' : 'disabled'}>
                            ${item.inStock ? '<i class="fa-solid fa-plus"></i> Add to Order' : 'Unavailable'}
                        </button>
                    </div>
                </div>
            `;

            if (item.inStock) {
                const btn = card.querySelector('button');
                btn.onclick = () => {
                    cart.push({...item, cartId: Date.now() + Math.random()});
                    this.renderCart();
                    document.getElementById('cart-sidebar').classList.add('open');
                    document.body.classList.add('cart-open');
                    this.toast(`${item.name} added`, 'success');
                };
            }

            grid.appendChild(card);
        });

        // Pagination Controls
        let pagControls = document.getElementById('menu-pagination');
        if(!pagControls) {
            pagControls = document.createElement('div');
            pagControls.id = 'menu-pagination';
            pagControls.className = 'pagination-controls';
            document.getElementById('view-menu').firstElementChild.appendChild(pagControls);
        }
        
        pagControls.innerHTML = `
            <button class="btn-secondary" ${menuCurrentPage === 1 ? 'disabled' : ''} id="btn-prev-page"><i class="fa-solid fa-chevron-left"></i> Prev</button>
            <span style="font-weight:600; color:var(--text-black-serif)">Page ${menuCurrentPage} of ${totalPages || 1}</span>
            <button class="btn-secondary" ${menuCurrentPage === totalPages || totalPages === 0 ? 'disabled' : ''} id="btn-next-page">Next <i class="fa-solid fa-chevron-right"></i></button>
        `;
        
        document.getElementById('btn-prev-page').onclick = () => {
             if(menuCurrentPage > 1) { 
                 menuCurrentPage--; 
                 this.renderMenu(); 
                 const y = document.getElementById('view-menu').getBoundingClientRect().top + window.scrollY - 100;
                 window.scrollTo({top: y, behavior: 'smooth'});
             }
        };
        document.getElementById('btn-next-page').onclick = () => {
             if(menuCurrentPage < totalPages) { 
                 menuCurrentPage++; 
                 this.renderMenu(); 
                 const y = document.getElementById('view-menu').getBoundingClientRect().top + window.scrollY - 100;
                 window.scrollTo({top: y, behavior: 'smooth'});
             }
        };
    },

    renderCart() {
        const container = document.getElementById('cart-items-container');
        container.innerHTML = '';
        const settings = Librarian.get('sr_settings', defaultSettings);
        
        const badge = document.getElementById('fab-cart-badge');
        if (badge) {
             badge.innerText = cart.length;
             if (cart.length > 0) badge.style.display = 'flex';
             else badge.style.display = 'none';
        }
        
        if (cart.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:3rem 1rem; color:#94a3b8;"><i class="fa-solid fa-cart-shopping" style="font-size:3rem; margin-bottom:1rem; opacity:0.3;"></i><h4 style="margin:0; font-size:1.1rem">Your cart is empty</h4><p style="font-size:0.9rem">Explore the menu to start your order.</p></div>';
        } else {
            cart.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <div style="flex:1">
                        <div style="font-weight:600">${item.name}</div>
                        <div style="color:var(--color-leaf-green); font-size:0.9rem;">PHP ${item.price.toFixed(2)}</div>
                    </div>
                    <button class="btn-danger" style="margin-left: 1rem; width: 35px; height: 35px; border-radius:50%; padding:0">X</button>
                `;
                div.querySelector('button').onclick = () => {
                    cart.splice(index, 1);
                    this.renderCart();
                };
                container.appendChild(div);
            });
        }

        const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
        const sc = subtotal * (settings.serviceChargePercent / 100);
        const total = subtotal + sc;

        document.getElementById('cart-subtotal').innerText = `PHP ${subtotal.toFixed(2)}`;
        document.getElementById('cart-sc').innerText = `PHP ${sc.toFixed(2)}`;
        document.getElementById('cart-total').innerText = `PHP ${total.toFixed(2)}`;

        const confirmBtn = document.getElementById('btn-confirm-order');
        confirmBtn.disabled = cart.length === 0;
    },

    bindCart() {
        document.getElementById('btn-confirm-order').onclick = () => {
            if (!currentTableId) {
                document.getElementById('cart-sidebar').classList.remove('open');
                document.body.classList.remove('cart-open');
                this.navTo('view-reservation');
                this.renderCustomerMap();
                this.toast('Please select your table from the floor map to lock your session first.', 'warning');
                return;
            }

            const tables = Librarian.get('sr_activeTables', []);
            const tableIndex = tables.findIndex(t => t.id === currentTableId);
            
            if (tableIndex > -1) {
                const settings = Librarian.get('sr_settings', defaultSettings);
                const t = tables[tableIndex];
                
                t.orderedItems = [...t.orderedItems, ...cart];
                t.subtotal = t.orderedItems.reduce((s, i) => s + i.price, 0);
                t.serviceCharge = t.subtotal * (settings.serviceChargePercent / 100);
                t.total = t.subtotal + t.serviceCharge + t.extensionFee;
                
                tables[tableIndex] = t;
                Librarian.set('sr_activeTables', tables);
                
                cart = [];
                document.getElementById('cart-sidebar').classList.remove('open');
                document.body.classList.remove('cart-open');
                this.renderCart();
                
                const orderIdStr = 'SR-' + Math.floor(Math.random() * 9000 + 1000);
                const orderEl = document.getElementById('checkout-order-id');
                const modalEl = document.getElementById('checkout-modal');
                
                if (orderEl && modalEl) {
                     orderEl.innerText = orderIdStr;
                     modalEl.classList.remove('hidden');
                     
                     document.getElementById('btn-close-checkout').onclick = () => {
                          modalEl.classList.add('hidden');
                          this.navTo('view-dashboard');
                          this.startDashboard(t);
                     };
                } else {
                     this.toast('Order Sent securely to the KDS!', 'success');
                     this.navTo('view-dashboard');
                     this.startDashboard(t);
                }
            }
        };
    },

    // --- DASHBOARD ---
    startDashboard(tableData) {
        document.getElementById('dash-table-num').innerText = tableData.tableNumber;
        document.getElementById('dash-name').innerText = tableData.customerName;
        document.getElementById('dash-zone').innerText = tableData.zone;
        
        const container = document.getElementById('dash-bill-items');
        container.innerHTML = '';
        tableData.orderedItems.forEach(item => {
            container.innerHTML += `<div class="summary-row"><span>${item.name}</span> <span style="font-weight:600;">PHP ${item.price.toFixed(2)}</span></div>`;
        });

        document.getElementById('dash-subtotal').innerText = `PHP ${tableData.subtotal.toFixed(2)}`;
        document.getElementById('dash-sc').innerText = `PHP ${tableData.serviceCharge.toFixed(2)}`;
        document.getElementById('dash-ext').innerText = `PHP ${tableData.extensionFee.toFixed(2)}`;
        document.getElementById('dash-total').innerText = `PHP ${tableData.total.toFixed(2)}`;
        
        if (timerInterval) clearInterval(timerInterval);
        const TWO_HOURS = 2 * 60 * 60 * 1000;
        const FIFTEEN_MINS = 15 * 60 * 1000;
        
        const tick = () => {
            const now = Date.now();
            const elapsed = now - tableData.timeSeated;
            let remaining = TWO_HOURS - elapsed;
            
            const timerEl = document.getElementById('live-timer');
            const alertEl = document.getElementById('timer-sms-warning');
            const btnExt = document.getElementById('btn-extend-time');
            
            if (remaining <= 0) {
                timerEl.innerText = "00:00:00";
                timerEl.className = 'timer-danger';
                clearInterval(timerInterval);
                return;
            }

            const h = Math.floor(remaining / (1000 * 60 * 60));
            const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((remaining % (1000 * 60)) / 1000);
            timerEl.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            
            // SMS Simulation
            if (remaining <= FIFTEEN_MINS) {
                 timerEl.className = 'timer-warn';
                 alertEl.classList.remove('hidden');
                 btnExt.classList.remove('hidden');
            } else {
                 timerEl.className = 'timer-safe';
                 alertEl.classList.add('hidden');
                 btnExt.classList.add('hidden');
            }
        };
        
        tick();
        timerInterval = setInterval(tick, 1000);
    },

    bindDashboard() {
        document.getElementById('btn-extend-time').onclick = () => {
             const settings = Librarian.get('sr_settings', defaultSettings);
             this.confirmModal('Authorize Extension', `Authorize card hit for ${settings.extensionFee} PHP?`, () => {
                const tables = Librarian.get('sr_activeTables', []);
                const idx = tables.findIndex(t => t.id === currentTableId);
                if (idx > -1) {
                    const t = tables[idx];
                    t.extensionFee += settings.extensionFee;
                    t.total = t.subtotal + t.serviceCharge + t.extensionFee;
                    t.timeSeated = Date.now(); // Reset 2 hr block
                    
                    tables[idx] = t;
                    Librarian.set('sr_activeTables', tables);
                    
                    this.toast('Authorized Extension. Timer Restored.', 'success');
                    this.startDashboard(t);
                }
            }, 'Authorize');
        };

        document.getElementById('btn-checkout').onclick = () => {
             this.confirmModal('Table Checkout', 'Are you ready to checkout? Your table will be notified for cleaning.', () => {
                const tables = Librarian.get('sr_activeTables', []);
                const currentTableData = tables.find(t => t.id === currentTableId);
                if (timerInterval) clearInterval(timerInterval);
                this.navTo('view-survey');
                this.renderSurvey(currentTableData);
            }, 'Checkout', 'Stay');
        };

        document.getElementById('btn-order-more').onclick = () => {
             this.navTo('view-menu');
             document.getElementById('cart-indicator').classList.remove('hidden');
        };

        document.getElementById('btn-call-waiter').onclick = () => {
             const tables = Librarian.get('sr_activeTables', []);
             const idx = tables.findIndex(t => t.id === currentTableId);
             if (idx > -1) {
                  tables[idx].needsWaiter = true;
                  Librarian.set('sr_activeTables', tables);
                  this.toast('A waiter is on the way!', 'success');
             }
        };
    },

    // --- QA SURVEY ---
    renderSurvey(tableData) {
        const container = document.getElementById('qa-items-container');
        container.innerHTML = '';
        
        if(!tableData || !tableData.orderedItems.length) {
            container.innerHTML = '<p>No items to review.</p>';
            return;
        }

        const uniqueItemsMap = new Map();
        tableData.orderedItems.forEach(i => {
             if(!uniqueItemsMap.has(i.id)) uniqueItemsMap.set(i.id, i);
        });

        Array.from(uniqueItemsMap.values()).forEach(item => {
            const div = document.createElement('div');
            div.className = 'qa-item';
            div.innerHTML = `
                <div class="qa-img" style="background-image:url('${item.img}')"></div>
                <div class="qa-content">
                    <div style="display:flex; justify-content: space-between; align-items: flex-start; flex-wrap:wrap">
                         <div>
                             <h3 style="margin: 0; font-size: 1.25rem;">${item.name}</h3>
                             <p style="color: var(--color-leaf-green); font-weight:600; font-size: 0.9rem; margin: 0.2rem 0 0 0;">PHP ${item.price ? item.price.toFixed(2) : '0.00'}</p>
                         </div>
                         <div class="stars" data-item-id="${item.id}">
                             <span class="star" data-val="1">★</span><span class="star" data-val="2">★</span><span class="star" data-val="3">★</span><span class="star" data-val="4">★</span><span class="star" data-val="5">★</span>
                         </div>
                    </div>
                    
                    <input type="hidden" class="star-rating" value="0" required>
                    
                    <div class="qa-feedback-area hidden" style="margin-top: 1.5rem;">
                        <textarea class="qa-textarea" placeholder="(Optional) Tell us what could be improved..."></textarea>
                        <div class="qa-quick-tags" style="margin-top: 0.8rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                             <span class="qa-tag">Too Salty</span>
                             <span class="qa-tag">Served Cold</span>
                             <span class="qa-tag">Small Portion</span>
                             <span class="qa-tag">Perfection</span>
                        </div>
                    </div>
                </div>
            `;

            const stars = div.querySelectorAll('.star');
            const fbArea = div.querySelector('.qa-feedback-area');
            const txt = div.querySelector('.qa-textarea');
            
            stars.forEach(s => {
                s.onclick = () => {
                    const ratedVal = parseInt(s.dataset.val);
                    div.querySelector('input.star-rating').value = ratedVal;
                    stars.forEach(st => parseInt(st.dataset.val) <= ratedVal ? st.classList.add('active') : st.classList.remove('active'));
                    fbArea.classList.remove('hidden');
                    fbArea.classList.add('fade-in');
                };
            });

            div.querySelectorAll('.qa-tag').forEach(tag => {
                tag.onclick = () => {
                    tag.classList.toggle('selected');
                    const word = tag.innerText;
                    if(tag.classList.contains('selected')) {
                        txt.value = txt.value ? txt.value + ' | ' + word : word;
                    } else {
                         txt.value = txt.value.replace(new RegExp('\\|?\\s*' + word + '\\s*\\|?', 'g'), '').replace(/^\||\|$/g, '').trim();
                    }
                };
            });

            container.appendChild(div);
        });
    },

    bindSurvey() {
        document.getElementById('qa-form').onsubmit = (e) => {
            e.preventDefault();
            const tables = Librarian.get('sr_activeTables', []);
            const tIndex = tables.findIndex(t => t.id === currentTableId);
            
            if(tIndex > -1) {
                const tableData = tables[tIndex];
                const feedback = {
                    date: new Date().toISOString(),
                    sales: tableData.total,
                    extensionFees: tableData.extensionFee,
                    ratings: [],
                    hour: new Date().getHours()
                };

                let allRated = true;

                document.getElementById('qa-items-container').querySelectorAll('.qa-item').forEach(item => {
                    const stars = item.querySelector('.stars');
                    const itemId = stars.dataset.itemId;
                    const rating = parseInt(item.querySelector('input.star-rating').value);
                    if(rating > 0) feedback.ratings.push({ id: itemId, rating });
                    else if(tableData.orderedItems.length > 0) allRated = false;
                });

                if(!allRated && tableData.orderedItems.length > 0) return this.toast('Please rate all dishes.', 'warning');

                const analytics = Librarian.get('sr_analyticsData', []);
                analytics.push(feedback);
                Librarian.set('sr_analyticsData', analytics);

                // Set to needs cleaning instead of splicing
                tables[tIndex].needsCleaning = true;
                Librarian.set('sr_activeTables', tables);
                
                this.toast('Survey verified. Routing data to Admin.', 'success');
                
                currentTableId = null;
                localStorage.removeItem('sr_currentSession');
                document.getElementById('nav-btn-dash').classList.add('hidden');
                setTimeout(() => window.location.reload(), 2000);
            }
        };
    },

    // --- STAFF ---
    bindStaff() {
        document.getElementById('btn-close-pos-modal').onclick = () => document.getElementById('pos-modal').classList.add('hidden');
        
        document.getElementById('btn-clear-table').onclick = () => {
             const tNum = parseInt(document.getElementById('pos-modal-num').innerText);
             const tables = Librarian.get('sr_activeTables', []);
             const tIndex = tables.findIndex(t => t.tableNumber === tNum);
             
             if(tIndex > -1){
                  tables.splice(tIndex, 1);
                  Librarian.set('sr_activeTables', tables);
                  this.toast(`Table ${tNum} successfully cleared!`, 'success');
                  document.getElementById('pos-modal').classList.add('hidden');
             }
        };

        document.getElementById('btn-force-end').onclick = () => {
             const tNum = parseInt(document.getElementById('pos-modal-num').innerText);
             this.confirmModal('Force Terminate', `WARNING: Are you sure you want to forcefully terminate Table ${tNum}? This will delete their session instantly.`, () => {
                 const tables = Librarian.get('sr_activeTables', []);
                 const tIndex = tables.findIndex(t => t.tableNumber === tNum);
                 
                 if(tIndex > -1){
                      tables.splice(tIndex, 1);
                      Librarian.set('sr_activeTables', tables);
                      this.toast(`Table ${tNum} forcefully terminated.`, 'warning');
                      document.getElementById('pos-modal').classList.add('hidden');
                 }
             }, 'Terminate', 'Cancel');
        };
    },

    renderStaffPOS() {
        console.log('[DEBUG] renderStaffPOS() triggered.');
        const grid = document.getElementById('floor-grid');
        if (!grid) {
             console.error('[DEBUG] FATAL: #floor-grid DOM element not found!');
             return;
        }
        grid.innerHTML = '';
        
        const tables = Librarian.get('sr_activeTables', []);
        const settings = Librarian.get('sr_settings', {maxTables: 25});
        
        console.log('[DEBUG] Active tables fetched:', tables.length);
        console.log('[DEBUG] Settings maxTables fetched:', settings.maxTables);
        
        const TWO_HOURS = 2 * 60 * 60 * 1000;
        const now = Date.now();
        const maxLimit = settings.maxTables || 25;

        for(let i=1; i<=maxLimit; i++) {
            const t = tables.find(x => x.tableNumber === i);
            const card = document.createElement('div');
            
            if(t) {
                const remaining = TWO_HOURS - (now - t.timeSeated);
                let sClass = 'status-green';
                if (remaining <= 0) sClass = 'status-red';
                else if (remaining < 30 * 60 * 1000) sClass = 'status-yellow';
                
                if(t.extensionFee > 0 && remaining > 0) sClass = 'status-green';

                if(t.needsWaiter) sClass = 'status-waiter';
                if(t.needsCleaning) sClass = 'status-cleaning';

                card.className = `pos-card ${sClass}`;
                
                let icon = (t.zone || '').includes('Entertainment') ? 'fa-music' : (t.zone || '').includes('Al Fresco') ? 'fa-wind' : 'fa-leaf';

                card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <h3 style="margin:0; font-size:1.2rem;">Table ${t.tableNumber}</h3>
                        <i class="fa-solid ${icon}" title="${t.zone || 'General'}" style="color:rgba(0,0,0,0.4); font-size:1.1rem;"></i>
                    </div>
                    <div style="font-weight:600; font-size:0.9rem; margin-top:0.75rem; color:#1e293b">${t.customerName}</div>
                    <div style="margin-top:auto; padding-top:1rem; border-top:1px solid rgba(0,0,0,0.1); display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#334155; font-size:0.85rem; font-weight:800;">PHP ${(t.total || 0).toFixed(2)}</span>
                        <span style="font-size:0.7rem; background:rgba(0,0,0,0.05); padding:0.25rem 0.5rem; border-radius:4px; font-weight:600;"><i class="fa-solid fa-clock" style="margin-right:0.3rem"></i>${t.timeSeated ? new Date(t.timeSeated).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) : 'N/A'}</span>
                    </div>
                `;
                
                card.onclick = () => {
                    document.getElementById('pos-modal-num').innerText = t.tableNumber;
                    document.getElementById('pos-modal-name').innerText = t.customerName;
                    document.getElementById('pos-modal-zone').innerText = t.zone;
                    
                    if(t.needsWaiter) {
                         t.needsWaiter = false;
                         Librarian.set('sr_activeTables', tables);
                         this.toast(`Waiter Call acknowledged safely at Table ${t.tableNumber}`, 'success');
                         this.renderStaffPOS();
                    }

                    if(t.needsCleaning){
                         document.getElementById('btn-clear-table').classList.remove('hidden');
                         document.getElementById('btn-force-end').classList.add('hidden');
                    } else {
                         document.getElementById('btn-clear-table').classList.add('hidden');
                         document.getElementById('btn-force-end').classList.remove('hidden');
                    }
                    
                    const itemsDiv = document.getElementById('pos-modal-items');
                    itemsDiv.innerHTML = t.orderedItems.map(i => `<div>${i.name} <span style="float:right; font-weight:600;">PHP ${i.price.toFixed(2)}</span></div>`).join('') || '<div style="color:#aaa">No items ordered currently.</div>';

                    document.getElementById('pos-modal-total').innerText = `PHP ${t.total.toFixed(2)}`;
                    document.getElementById('pos-modal').classList.remove('hidden');
                };
            } else {
                card.className = `pos-card`;
                card.style.background = '#f8fafc';
                card.style.border = '2px dashed #e2e8f0';
                card.style.borderLeft = '2px dashed #e2e8f0'; 
                card.style.boxShadow = 'none';
                card.style.color = '#94a3b8';
                card.style.cursor = 'default';
                
                card.innerHTML = `
                    <h3 style="margin:0; font-size:1.1rem; color:#cbd5e1;">Table ${i}</h3>
                    <div style="flex:1; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:0.5rem; margin-top:1rem;">
                        <i class="fa-solid fa-chair" style="font-size:1.75rem; color:#e2e8f0;"></i>
                        <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#cbd5e1;">Available</span>
                    </div>
                `;
            }
            grid.appendChild(card);
        }
        console.log('[DEBUG] Finished mounting', maxLimit, 'tables to the POS grid.');
    },

    renderKDS() {
        const tables = Librarian.get('sr_activeTables', []);
        const tc = document.getElementById('kds-tickets');
        tc.innerHTML = '';

        let ticketsList = tables.filter(t => t.orderedItems.length > 0);

        if (ticketsList.length === 0) {
            tc.innerHTML = '<p style="color:#666; grid-column:1/-1;">No active kitchen tickets dynamically registered.</p>';
            let pagControls = document.getElementById('kds-pagination');
            if(pagControls) pagControls.remove();
            return;
        }

        const totalPages = Math.ceil(ticketsList.length / KDS_ITEMS_PER_PAGE);
        if(kdsCurrentPage > totalPages) kdsCurrentPage = 1;
        if(kdsCurrentPage < 1) kdsCurrentPage = 1;

        const startIndex = (kdsCurrentPage - 1) * KDS_ITEMS_PER_PAGE;
        const paginatedTickets = ticketsList.slice(startIndex, startIndex + KDS_ITEMS_PER_PAGE);

        paginatedTickets.forEach((t, idx) => {
            const div = document.createElement('div');
            div.className = 'kds-ticket';
            div.style.animation = 'slideUp 0.3s ease forwards';
            div.style.animationDelay = `${idx * 0.05}s`;
            div.style.opacity = '0';
            
            // Generate exact relative timestamp instead of absolute now()
            const timeObj = new Date(t.timeSeated);
            
            div.innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; align-items:center;">
                    <div class="route-tag" style="margin-bottom:0; background:#334155;">Dine-In</div>
                    <div style="color:#94a3b8; font-size:0.75rem"><i class="fa-solid fa-clock" style="margin-right:0.2rem"></i>${timeObj.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div>
                </div>
                <h3 style="margin:0 0 0.5rem 0; font-size:1.15rem">Table ${t.tableNumber}</h3>
                <ul style="padding-left:1.2rem; margin-bottom:0; font-size:0.9rem; color:#e2e8f0; line-height:1.4">
                    ${t.orderedItems.map(i => `<li style="margin-bottom:0.3rem">${i.name}</li>`).join('')}
                </ul>
            `;
            tc.appendChild(div);
        });

        // Pagination Controls
        let pagControls = document.getElementById('kds-pagination');
        if(!pagControls) {
            pagControls = document.createElement('div');
            pagControls.id = 'kds-pagination';
            pagControls.className = 'pagination-controls';
            pagControls.style.borderColor = '#333';
            pagControls.style.marginTop = 'auto'; // pushes it to bottom since flex column
            document.getElementById('staff-kds').appendChild(pagControls);
        }

        pagControls.innerHTML = `
            <button class="btn-secondary" style="border:1px solid #444; color:white; background:#222;" ${kdsCurrentPage === 1 ? 'disabled' : ''} id="kds-prev-page"><i class="fa-solid fa-chevron-left"></i> Prev</button>
            <span style="font-weight:600; color:#cbd5e1">Page ${kdsCurrentPage} of ${totalPages || 1}</span>
            <button class="btn-secondary" style="border:1px solid #444; color:white; background:#222;" ${kdsCurrentPage === totalPages || totalPages === 0 ? 'disabled' : ''} id="kds-next-page">Next <i class="fa-solid fa-chevron-right"></i></button>
        `;

        document.getElementById('kds-prev-page').onclick = () => {
             if(kdsCurrentPage > 1) { kdsCurrentPage--; this.renderKDS(); }
        };
        document.getElementById('kds-next-page').onclick = () => {
             if(kdsCurrentPage < totalPages) { kdsCurrentPage++; this.renderKDS(); }
        };
    },

    setStockCat(c) {
        activeStockCategory = c;
        this.renderStockTracker();
    },

    renderStockTracker() {
        const container = document.getElementById('stock-sync-container');
        const menuSearch = Librarian.get('sr_menuInventory', initialMenu);
        const categories = ['All', ...new Set(menuSearch.map(i => i.cat).filter(c => c && c.trim() !== ''))];
        
        let catsHtml = categories.map(c => `<button class="cat-pill ${c === activeStockCategory ? 'active' : ''}" onclick="Executive.setStockCat('${c}')">${c}</button>`).join('');

        container.innerHTML = `
            <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:1.5rem">
                 ${catsHtml}
            </div>
            <div style="background:white; border-radius:12px; padding:2rem; box-shadow:0 10px 30px rgba(0,0,0,0.04);">
                <div style="position:relative; margin-bottom:2rem; max-width: 600px;">
                    <i class="fa-solid fa-search" style="position:absolute; left:1.25rem; top:50%; transform:translateY(-50%); color:#94a3b8; font-size:1.1rem"></i>
                    <input type="text" id="dev-stock-search" placeholder="Search Librarian catalog..." style="width:100%; padding-left:3rem; border:2px solid #e2e8f0; padding-top:1rem; padding-bottom:1rem; padding-right:1rem; border-radius:8px; outline:none; font-family:var(--font-body); font-size:1.05rem; transition: border-color 0.2s">
                </div>
                <div id="dev-stock-list" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:1.5rem;"></div>
            </div>
        `;
        
        const listDiv = document.getElementById('dev-stock-list');
        const searchBox = document.getElementById('dev-stock-search');
        
        searchBox.addEventListener('focus', () => searchBox.style.borderColor = 'var(--text-black-serif)');
        searchBox.addEventListener('blur', () => searchBox.style.borderColor = '#e2e8f0');

        const renderStockList = (filterStr = '') => {
            listDiv.innerHTML = '';
            const filtered = menuSearch.filter(m => m.name && m.price !== null && m.cat !== m.name.trim() && (activeStockCategory === 'All' || m.cat === activeStockCategory) && m.name.toLowerCase().includes(filterStr.toLowerCase()));
            
            if(filtered.length === 0) listDiv.innerHTML = '<p style="color:#666; font-style:italic; grid-column:1/-1">No exact dish matches found in catalog.</p>';
            
            const totalPages = Math.ceil(filtered.length / STOCK_ITEMS_PER_PAGE) || 1;
            if (stockCurrentPage > totalPages) stockCurrentPage = totalPages;
            const startIdx = (stockCurrentPage - 1) * STOCK_ITEMS_PER_PAGE;
            const paginated = filtered.slice(startIdx, startIdx + STOCK_ITEMS_PER_PAGE);

            paginated.forEach(item => {
                const card = document.createElement('div');
                card.style.cssText = `animation: slideUp 0.3s ease-out; display:flex; align-items:center; justify-content:space-between; padding:1.25rem; border:1px solid #f1f5f9; border-radius:16px; transition:box-shadow 0.2s; background:${item.inStock ? '#ffffff' : '#fff1f2'}`;
                card.onmouseenter = () => card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.06)';
                card.onmouseleave = () => card.style.boxShadow = 'none';

                card.innerHTML = `
                    <div style="display:flex; gap:1.2rem; align-items:center;">
                        <div style="width:55px; height:55px; border-radius:12px; background-image:url('${item.img}'); background-size:cover; background-position:center; filter:${item.inStock ? 'none' : 'grayscale(100%)'}"></div>
                        <div>
                            <div style="font-weight:700; font-size:1.05rem; color: #0f172a; font-family:var(--font-heading);">${item.name}</div>
                            <div style="font-size:0.8rem; color:#64748b; font-weight:600; text-transform:uppercase; margin-top:0.35rem"><i class="fa-solid fa-tag"></i> ${item.cat}</div>
                        </div>
                    </div>
                    <label class="switch">
                        <input type="checkbox" ${item.inStock ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                `;
                
                const box = card.querySelector('input');
                box.onchange = () => {
                     const original = menuSearch.find(x => x.id === item.id);
                     if(original) original.inStock = box.checked;
                     Librarian.set('sr_menuInventory', menuSearch);
                     card.style.background = box.checked ? '#ffffff' : '#fff1f2';
                     card.querySelector('.fa-tag').parentElement.previousElementSibling.parentElement.previousElementSibling.style.filter = box.checked ? 'none' : 'grayscale(100%)';
                };
                listDiv.appendChild(card);
            });
            
            let pgGrid = document.getElementById('stock-pagination');
            if(!pgGrid) {
                pgGrid = document.createElement('div');
                pgGrid.id = 'stock-pagination';
                pgGrid.style.cssText = 'grid-column: 1 / -1; display:flex; justify-content:center; gap:1rem; margin-top:2rem; align-items:center';
                listDiv.appendChild(pgGrid);
            }
            pgGrid.innerHTML = `
                <button class="btn-secondary" id="stock-prev-page" ${stockCurrentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>
                <span style="font-weight:600; color:#475569">Catalog ${stockCurrentPage} of ${totalPages}</span>
                <button class="btn-secondary" id="stock-next-page" ${stockCurrentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>
            `;
            document.getElementById('stock-prev-page').onclick = () => {
                 if(stockCurrentPage > 1) { stockCurrentPage--; renderStockList(filterStr); }
            };
            document.getElementById('stock-next-page').onclick = () => {
                 if(stockCurrentPage < totalPages) { stockCurrentPage++; renderStockList(filterStr); }
            };
        };
        
        renderStockList('');
        
        searchBox.oninput = (e) => {
             stockCurrentPage = 1;
             renderStockList(e.target.value);
        };
    },

    injectSimulatedData() {
        const menu = Librarian.get('sr_menuInventory', initialMenu);
        const analytics = [];
        const now = Date.now();
        const DayMs = 24 * 60 * 60 * 1000;
        
        for(let i=0; i<150; i++) {
            const daysAgo = Math.floor(Math.random() * 7);
            const timeOffset = Math.random() * DayMs;
            const subtotal = 1000 + Math.random() * 4000;
            const extFee = Math.random() > 0.8 ? 100 : 0;
            const total = subtotal * 1.1 + extFee;
            
            const ratings = [];
            for(let r=0; r<3; r++) {
               const it = popularItems[Math.floor(Math.random()*popularItems.length)];
               if(it) ratings.push({ id: it.id, name: it.name, rating: Math.random() > 0.2 ? 5 : (Math.random()>0.5 ? 4 : 3) });
            }
            
            analytics.push({
                date: now - (daysAgo * DayMs) - timeOffset,
                sales: total,
                extensionFees: extFee,
                ratings: ratings
            });
        }
        Librarian.set('sr_analyticsData', analytics);

        const tables = [];
        const zones = ['Quiet Zone', 'Entertainment Zone', 'Al Fresco'];
        const states = [
            { tOffset: 15, nw: false, nc: false }, 
            { tOffset: 45, nw: true, nc: false },  
            { tOffset: 105, nw: false, nc: false }, 
            { tOffset: 140, nw: false, nc: false }, 
            { tOffset: 150, nw: false, nc: true },  
            { tOffset: 60, nw: false, nc: false },  
            { tOffset: 90, nw: true, nc: false },   
            { tOffset: 115, nw: false, nc: false }  
        ];
        
        for(let i=0; i<8; i++) {
            const items = [];
            const numItems = Math.floor(Math.random() * 5) + 3;
            let subtotal = 0;
            for(let j=0; j<numItems; j++) {
                const it = popularItems[Math.floor(Math.random()*popularItems.length)];
                if(it) { items.push(it); subtotal += it.price; }
            }
            const timeSeated = now - (states[i].tOffset * 60 * 1000); 
            const tableNum = [2, 5, 8, 12, 15, 18, 22, 25][i];
            tables.push({
                id: 'sess_sim' + i,
                tableNumber: tableNum,
                customerName: 'Guest ' + Math.floor(Math.random()*1000),
                zone: zones[Math.floor(Math.random()*zones.length)],
                orderedItems: items,
                subtotal: subtotal,
                serviceCharge: subtotal * 0.1,
                extensionFee: 0,
                total: subtotal * 1.1,
                timeSeated: timeSeated,
                needsWaiter: states[i].nw,
                needsCleaning: states[i].nc
            });
        }
        Librarian.set('sr_activeTables', tables);
    },

    // --- ADMIN ---
    bindAdmin() {
         document.getElementById('btn-save-settings').onclick = () => {
             const sc = parseFloat(document.getElementById('setting-sc').value);
             const ext = parseFloat(document.getElementById('setting-ext').value);
             
             Librarian.set('sr_settings', {
                  serviceChargePercent: sc,
                  extensionFee: ext,
                  maxTables: 20
             });
             this.toast('Executive rules synched globally', 'success');
             this.updateGlobalSettings();
         };
    },

    renderAdmin() {
        const data = Librarian.get('sr_analyticsData', []);
        const menu = Librarian.get('sr_menuInventory', initialMenu);
        const settings = Librarian.get('sr_settings', defaultSettings);
        
        document.getElementById('setting-sc').value = settings.serviceChargePercent;
        document.getElementById('setting-ext').value = settings.extensionFee;

        const totalFees = data.reduce((sum, s) => sum + (s.extensionFees || 0), 0);
        const totalSales = data.reduce((sum, s) => sum + (s.sales || 0), 0);
        document.getElementById('stat-fees').innerText = totalFees.toFixed(2);
        document.getElementById('stat-sales').innerText = totalSales.toFixed(2);

        // QA Ratings Map
        const itemRatings = {};
        data.forEach(s => {
             if(s.ratings) {
                 s.ratings.forEach(r => {
                     // r might be {id:..., rating:..., name:...}
                     if(!itemRatings[r.id]) itemRatings[r.id] = { sum: 0, count: 0, name: r.name || 'Unknown' };
                     itemRatings[r.id].sum += r.rating;
                     itemRatings[r.id].count += 1;
                 });
             }
        });

        let ratingArray = Object.keys(itemRatings).map(id => {
             const avg = itemRatings[id].sum / itemRatings[id].count;
             let finalName = itemRatings[id].name;
             if(finalName === 'Unknown') {
                 const iInfo = menu.find(m => m.id === id);
                 if(iInfo) finalName = iInfo.name;
             }
             return { id, name: finalName, avg, count: itemRatings[id].count };
        });
        
        ratingArray.sort((a,b) => b.count - a.count); // Most ordered first
        
        const controlsDiv = document.getElementById('qa-trends-controls');
        if(controlsDiv) {
            controlsDiv.innerHTML = `
                <div style="position:relative; margin-bottom:1rem;">
                    <i class="fa-solid fa-search" style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); color:#888;"></i>
                    <input type="text" id="admin-qa-search" value="${adminSearchTerm}" placeholder="Search AI predictive item models..." style="width:100%; padding-left:2.5rem; border:1px solid #ddd; padding-top:0.75rem; padding-bottom:0.75rem; padding-right:0.6rem; border-radius:6px; outline:none; font-family:var(--font-body); font-size:0.95rem;">
                </div>
            `;

            document.getElementById('admin-qa-search').oninput = (e) => {
                adminSearchTerm = e.target.value;
                adminCurrentPage = 1;
                this.renderQATable(ratingArray);
            };
        }
        
        this.renderQATable(ratingArray);
    },

    renderQATable(fullArray) {
        const rc = document.getElementById('stat-ratings');
        if(!rc) return;
        
        let filtered = fullArray.filter(i => i.name && i.name.toLowerCase().includes(adminSearchTerm.toLowerCase()));
        
        if(filtered.length === 0) {
             rc.innerHTML = '<p style="color:#666; font-style:italic; margin-top:1rem;">No data matched global parameters.</p>';
             return;
        }

        const totalPages = Math.ceil(filtered.length / ADMIN_ITEMS_PER_PAGE);
        if(adminCurrentPage > totalPages) adminCurrentPage = 1;
        
        const startIndex = (adminCurrentPage - 1) * ADMIN_ITEMS_PER_PAGE;
        const pageItems = filtered.slice(startIndex, startIndex + ADMIN_ITEMS_PER_PAGE);

        rc.innerHTML = pageItems.map(item => {
             let color = '#ef4444'; // Red for low
             let textC = '#fff';
             if(item.avg >= 4) color = 'var(--color-leaf-green)';
             else if(item.avg >= 3) { color = 'var(--color-banana-yellow)'; textC = '#000'; }
             
             return `<div style="display:flex; justify-content:space-between; align-items:center; padding:1rem 0; border-bottom:1px solid #f1f5f9;">
                 <div style="flex:1;">
                     <div style="font-weight:600; color:#0f172a; font-size:0.95rem">${item.name}</div>
                     <div style="font-size:0.8rem; color:#64748b; margin-top:0.25rem"><i class="fa-solid fa-chart-line" style="margin-right:0.3rem"></i>${item.count} Historical Orders</div>
                 </div>
                 <div style="text-align:right">
                     <span style="display:inline-block; background:${color}; color:${textC}; padding:0.4rem 0.6rem; border-radius:6px; font-weight:700; font-size:0.95rem; box-shadow:0 2px 5px rgba(0,0,0,0.1);"><i class="fa-solid fa-star" style="margin-right:0.3rem"></i>${item.avg.toFixed(1)}</span>
                 </div>
             </div>`;
        }).join('');

        // Pagination
        if(totalPages > 1) {
             rc.innerHTML += `
               <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem; padding-top:1rem;">
                   <button class="btn-secondary" style="padding:0.4rem 0.8rem; font-size:0.85rem;" ${adminCurrentPage===1?'disabled':''} id="admin-prev"><i class="fa-solid fa-chevron-left"></i></button>
                   <span style="font-size:0.85rem; font-weight:600; color:#94a3b8">Pg ${adminCurrentPage} of ${totalPages}</span>
                   <button class="btn-secondary" style="padding:0.4rem 0.8rem; font-size:0.85rem;" ${adminCurrentPage===totalPages?'disabled':''} id="admin-next"><i class="fa-solid fa-chevron-right"></i></button>
               </div>
             `;
             if(document.getElementById('admin-prev')) document.getElementById('admin-prev').onclick = () => { adminCurrentPage--; this.renderQATable(fullArray); };
             if(document.getElementById('admin-next')) document.getElementById('admin-next').onclick = () => { adminCurrentPage++; this.renderQATable(fullArray); };
        }
    }
};

document.addEventListener('DOMContentLoaded', () => Executive.init());
