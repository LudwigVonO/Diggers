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

insert into diggers_app.film (id, title, overview,poster_link, links,first_recommended_at) values
  (1, 'Gladiator','African farmer goes to Rome in quest for glory','https://www.google.com',ARRAY['https://www.google.com','https://www.netflix.com'], '2015-07-03T14:11:30Z'),
  (2, 'Old Boy','Man gets fit in jail, comes out and gets laid','https://www.google.com',ARRAY['https://www.google.com','https://www.netflix.com'], '2015-07-03T14:11:30Z'),
  (3, 'Florida Project','A touching film','https://www.google.com',ARRAY['https://www.google.com','https://www.netflix.com'], '2015-07-03T14:11:30Z'),
  (4, 'Midsommar','Americans discover European culture','https://www.google.com',ARRAY['https://www.google.com','https://www.netflix.com'], '2015-07-03T14:11:30Z');
  

alter sequence diggers_app.film_id_seq restart with 5;

insert into diggers_app.recommendation (id, media_id, recommender_id,rating, review, created_at) values
  (1, 1, 1, 5,'If you ask me, the emperor is the bad guy.', '2015-07-03T14:11:30Z'),
  (2, 2, 2, 5,'Love against all odds and even reason.', '2015-07-03T14:11:30Z'),
  (3, 1, 3, 5,'What happens to the dog from the first fight?', '2015-07-03T14:11:30Z'),
  (4, 4, 4, 5,'Some fantastic dresses and dances.', '2015-07-03T14:11:30Z');
  
alter sequence diggers_app.film_id_seq restart with 5;


insert into diggers_app.ref_recommendations_w_moods (id,recommendation_id,mood_id) values
  (1,1,2),
  (2,1,4),
  (3,1,1),
  (4,2,3),
  (5,2,4),
  (6,3,1),
  (7,3,2),
  (8,4,1);


commit;