begin;


create schema diggers_app;

create table diggers_app.user (
  id               serial primary key,
  first_name       text not null check (char_length(first_name) < 80),
  last_name        text check (char_length(last_name) < 80),
  email            text not null,
  password         text not null,
  created_at       timestamp default now()
);

comment on table diggers_app.user is 'A user of the app.';
comment on column diggers_app.user.id is 'The primary unique identifier for the user.';
comment on column diggers_app.user.first_name is 'The user’s first name.';
comment on column diggers_app.user.last_name is 'The user’s last name.';
comment on column diggers_app.user.email is 'The user’s email  .';
comment on column diggers_app.user.created_at is 'The time this person was created.';


create table diggers_app.mood (
  id               serial primary key,
  name             text not null,
  description      text not null,
  created_at       timestamp default now()
);

comment on table diggers_app.mood is 'One of the recommendation moods';
comment on column diggers_app.mood.id is 'The primary unique identifier for the mood.';
comment on column diggers_app.mood.name is 'The name given to the mood.';
comment on column diggers_app.mood.description is 'A longer description of what a mood means.';
comment on column diggers_app.mood.created_at is 'The time this mood was created.';


create table diggers_app.film (
  id               serial primary key,
  title            text not null,
  overview         text,
  poster_link      text,
  links            text[],
  first_recommended_at       timestamp default now()
);

comment on table diggers_app.film is 'A recommended film';
comment on column diggers_app.film.id is 'The primary unique identifier for the film.';
comment on column diggers_app.film.title is 'The film’s title.';
comment on column diggers_app.film.overview is 'A short description of the film.';
comment on column diggers_app.film.poster_link is 'The link to that film’s poster';
comment on column diggers_app.film.links is 'The platform links for this film.';
comment on column diggers_app.film.first_recommended_at is 'The time this film was first recommended.';

create table diggers_app.recommendation (
  id               serial primary key,
  media_id         integer not null references diggers_app.film(id),
  recommender_id   integer not null references diggers_app.user(id),
  rating           integer,
  review           text,
  created_at       timestamp default now()
);

create table diggers_app.ref_recommendations_w_moods (
  id               serial primary key,
  recommendation_id integer not null references diggers_app.recommendation(id),
  mood_id          integer not null references diggers_app.mood(id)
);


-- Creates `Mood.recommendatioons` connection
create function diggers_app.recommendation_moods(r diggers_app.recommendation)
returns setof diggers_app.mood as $$
  select mood.*
  from diggers_app.mood
  inner join diggers_app.ref_recommendations_w_moods
    on (ref_recommendations_w_moods.mood_id = mood.id)
  inner join diggers_app.recommendation
    on (mood.id = ref_recommendations_w_moods.id)
  where recommendation.id = r.id;
$$ language sql stable;

commit;