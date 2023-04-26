DEFINE FIELD resource ON acl TYPE record;
DEFINE FIELD user ON TABLE acl TYPE record<user>;

-- A user can have multiple permissions on a acl
DEFINE FIELD permission ON TABLE acl TYPE array
  -- The array must not be empty because at least one permission is required
  ASSERT array::len($value) > 0;

-- Assigned permissions are identified by strings
DEFINE FIELD type.* ON TABLE resource TYPE string
  -- Allow only these values in the array
  ASSERT $value INSIDE ["create", "read", "write", "delete"];
