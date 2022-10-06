#!/bin/bash

# Create an empty database.
psql -U postgres -c "DROP DATABASE IF EXISTS db_visualizer_sample_db WITH (FORCE);";
psql -U postgres -c "CREATE DATABASE db_visualizer_sample_db ENCODING 'UTF-8';";


# Seed the database with sample data.
lzop -cd /var/app/sample-files/dump.lzo | psql -U postgres db_visualizer_sample_db;
