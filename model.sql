CREATE TABLE categories (
  "category_id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "icon" varchar
);

CREATE TABLE pins (
  "_id" serial PRIMARY KEY,
  "pin_name" varchar NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT LOCALTIMESTAMP, 
  "latitude" DECIMAL(8,6) NOT NULL,
  "longitude" DECIMAL(9,6) NOT NULL,
  "likes" integer DEFAULT 0,
  "address" varchar,
  "content" varchar,
  "created_by" varchar,
  "category_id" integer REFERENCES "categories"("category_id")
);

INSERT INTO categories (name, icon) VALUES ('screaming', 'screaming');
INSERT INTO categories (name, icon) VALUES ('mad', 'mad');
INSERT INTO categories (name, icon) VALUES ('poo', 'poo');
INSERT INTO categories (name, icon) VALUES ('skull', 'skull');
INSERT INTO categories (name, icon) VALUES ('heart', 'heart');
INSERT INTO categories (name, icon) VALUES ('codesmith', 'codesmith');

INSERT INTO pins (pin_name, latitude, longitude, address, content, created_by, category_id) VALUES ('Codesmith', 40.7477503, -73.9959585, '330 7th Ave, New York, NY 10001', 'Saw some sketchy students loitering outside', 'xsunnibunnix', 6);
INSERT INTO pins (pin_name, latitude, longitude, address, content, created_by, category_id) VALUES ('Empire State Building', 40.7484445, -73.9882447, '20 W 34th St., New York, NY 10001', 'Too many tourists.', 'xsunnibunnix', 4);

-- psql -d <POSTGRES URI> -f model.sql