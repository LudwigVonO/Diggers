begin;

insert into diggers_app.user (id, first_name, last_name, email, password, created_at) values
  (1, 'Louis', 'Strauss', 'strausslouis95@gmail.com','password', '2015-07-03T14:11:30Z'),
  (2, 'Zach', 'Bretel', 'zacharie.bretel@ehl.ch','password', '1999-04-04T21:21:42Z'),
  (3, 'Hadrien', 'Blanc', 'hadrien.blanc@ehl.ch','password', '2002-08-16T19:03:47Z'),
  (4, 'Raul', 'Egger', 'raul.egger@payfit.com','password', '2013-09-24T15:05:29Z');

alter sequence diggers_app.user_id_seq restart with 5;


insert into diggers_app.mood (id, name, description,created_at) values
  (1, 'Visual Masterpiece','Some films will make you travel from the comfort of your couch', '2015-07-03T14:11:30Z'),
  (2, 'Splendid Soundtrack','Some films will transport you with their soundtrack alone.', '1999-04-04T21:21:42Z'),
  (3, 'Psychological Rollercoaster','Some films will make you uncomfortable in your comfort zone.', '2002-08-16T19:03:47Z'),
  (4, 'Emotionally Intense','Some films will bring the feels right to your couch.', '2013-09-24T15:05:29Z');

alter sequence diggers_app.mood_id_seq restart with 5;






insert into diggers_app.film (id, tmdb_id, title, original_title, original_language, overview, poster_path, genre_ids, links, release_date, first_recommended_at ) values
  (1, 98,'Gladiator','Gladiator','en','In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army‘s most capable and trusted generals and a key advisor to the emperor.  As Marcus‘ devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.','/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',ARRAY[28,18,12],ARRAY['{"display_name":"Itunes","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://tv.apple.com/fr/movie/gladiator/umc.cmc.50lk1pxm803ym8vizumxitxd2?playableId=tvs.sbd.9001%3a603113590"}','{"display_name":"Google Play","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://play.google.com/store/movies/details/Gladiator_VF?gl=FR&hl=en&id=XtWKvFHwMtM"}','{"display_name":"Amazon Prime Video","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonPrimeVideoIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://app.primevideo.com/watch?gti=amzn1.dv.gti.2a110cc9-da6a-4d14-ad80-b2091d0614ad&tag=utellycom00-21"}']::json[],'2000-05-04', '2015-07-03T14:11:30Z'),
  (2, 5915,'Into the Wild','Into the Wild','en','After graduating from Emory University in 1992, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity, and hitchhikes to Alaska to live in the wilderness.','/2MSGZEE6XZd2r4ODNziwAw7Hpw0.jpg',ARRAY[12,18],ARRAY['{"display_name":"Itunes","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://tv.apple.com/fr/movie/into-the-wild/umc.cmc.3nuas5m80l7dxppd8iu2n3n2p?playableId=tvs.sbd.9001%3a390010558"}']::json[],'2007-09-11', '2015-07-03T14:11:30Z'),
  (3, 394117,'The Florida Project','The Florida Project','en','The story of a precocious six year-old and her ragtag group of friends whose summer break is filled with childhood wonder, possibility and a sense of adventure while the adults around them struggle with hard times.','/bnSTP1PY2fDyat0eUa4QouuGV7F.jpg',ARRAY[18],ARRAY['{"display_name":"Itunes","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://tv.apple.com/fr/movie/the-florida-project/umc.cmc.xji65u9og5s2mij32svpn5wy?playableId=tvs.sbd.9001%3a1361818647"}']::json[],'2017-10-06', '2015-07-03T14:11:30Z'),
  (4, 508442,'Soul','Soul','en','Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.','/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',ARRAY[16,10751,35,14,18],ARRAY['{"display_name":"Itunes","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://tv.apple.com/fr/movie/soul/umc.cmc.6wle5itf2fkzl2gvlw9r14xcx?playableId=tvs.sbd.9001%3a1555180193"}','{"display_name":"Google Play","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://play.google.com/store/movies/details/Soul?gl=FR&hl=en&id=IEiflhas1Ws.P"}','{"display_name":"Disney +","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/DisneyPlusIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://www.disneyplus.com/video/fd534daa-2ae0-469d-be37-819393128e8d"}']::json[],'2020-12-25', '2015-07-03T14:11:30Z'),
  (5, 87516,'Oldboy','Oldboy','en','An everyday man has only three and a half days and limited resources to discover why he was imprisoned in a nondescript room for 20 years without any explanation.','/iX93YdBrZA1EpGbphmjf4ARj1Za.jpg',ARRAY[18,53,9648,28],ARRAY['{"display_name":"Itunes","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://tv.apple.com/fr/movie/oldboy/umc.cmc.6ahbk2tiw0iv0kjj08m3c5rt?playableId=tvs.sbd.9001%3a763196902"}','{"display_name":"Google Play","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://play.google.com/store/movies/details/Oldboy_VF?gl=FR&hl=en&id=B2q942Y-XwA"}']::json[],'2013-11-14', '2015-07-03T14:11:30Z'),
  (6, 46738,'Incendies','Incendies','en','A mother‘s last wishes send twins Jeanne and Simon on a journey to Middle East in search of their tangled roots. Adapted from Wajdi Mouawad‘s acclaimed play, Incendies tells the powerful and moving tale of two young adults‘ voyage to the core of deep-rooted hatred, never-ending wars and enduring love.','/eULmcIWvkWYifAJcQr7dzt9maPh.jpg',ARRAY[9648,10752,18],ARRAY['{"display_name":"Itunes","icon":"https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAFR.png?w=92&auto=compress&app_version=ecedbce2-7ffb-43d6-88bd-0143b683d052_1e1210o12023-06-09","url":"https://tv.apple.com/fr/movie/incendies/umc.cmc.50m1hz4sdb9os24oj0moqglut?playableId=tvs.sbd.9001%3a455569545"}']::json[],'2010-09-04', '2015-07-03T14:11:30Z');
  
alter sequence diggers_app.film_id_seq restart with 7;


insert into diggers_app.recommendation (id, media_id, recommender_id,rating, review, created_at) values
  (1, 1, 1, 5,'If you ask me, the emperor is the bad guy.', '2015-07-03T14:11:30Z'),
  (2, 2, 2, 5,'Love against all odds and even reason.', '2015-07-03T14:11:30Z'),
  (3, 1, 3, 5,'What happens to the dog from the first fight?', '2015-07-03T14:11:30Z'),
  (4, 4, 4, 5,'Some fantastic dresses and dances.', '2015-07-03T14:11:30Z');
  
alter sequence diggers_app.recommendation_id_seq restart with 5;


insert into diggers_app.ref_recommendations_w_moods (id,recommendation_id,mood_id) values
  (1,1,2),
  (2,1,4),
  (3,1,1),
  (4,2,3),
  (5,2,4),
  (6,3,1),
  (7,3,2),
  (8,4,1);
alter sequence diggers_app.ref_recommendations_w_moods_id_seq restart with 9;

commit;