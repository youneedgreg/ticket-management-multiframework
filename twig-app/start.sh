#!/bin/bash
echo "Setting up writable data directory..."

# Create data directory if it doesn't exist
mkdir -p /app/data

# Make it writable
chmod -R 777 /app/data

# Initialize tickets.json if it doesn't exist
if [ ! -f /app/data/tickets.json ]; then
    echo "[]" > /app/data/tickets.json
fi

# Make tickets.json writable
chmod 666 /app/data/tickets.json

echo "✅ Data directory ready!"
echo "Generating autoload files..."
composer dump-autoload -o

echo "Starting PHP server..."
php -S 0.0.0.0:$PORT -t public