-- Create schemafull user table.
DEFINE TABLE user SCHEMAFULL;

-- Define some fields.
DEFINE FIELD firstName ON TABLE user TYPE string;
DEFINE FIELD lastName ON TABLE user TYPE string;
DEFINE FIELD email ON TABLE user TYPE string
  ASSERT is::email($value);
DEFINE INDEX userEmailIndex ON TABLE user COLUMNS email UNIQUE;

-- SEE IT IN ACTION
-- 1: Add a user with all required fields and an undefined one.
CREATE user SET firstName = 'Tobie', lastName = 'Hitchcock', email = 'Tobie.Hitchcock@surrealdb.com', photoURI = 'photo/yxCFi22Jw2.webp';
-- 2: Statement will fail because photoURI is not a defined field.
