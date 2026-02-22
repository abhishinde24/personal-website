# Building a Simple Database with Bash Script

In this tutorial, we'll build a simple key-value database using only Bash scripting. This is a great exercise to understand how databases work at a fundamental level and to improve your shell scripting skills.

## What We'll Build

Our simple database will support the following operations:

- **SET** - Store a key-value pair
- **GET** - Retrieve a value by key
- **DELETE** - Remove a key-value pair
- **LIST** - Show all stored keys

## The Data File

We'll use a simple text file to store our data. Each line will contain a key-value pair separated by a delimiter.

```bash
#!/bin/bash

# Database file location
DB_FILE="$HOME/.simpledb"

# Create the database file if it doesn't exist
touch "$DB_FILE"
```

## SET Operation

The SET operation stores a key-value pair. If the key already exists, we update its value.

```bash
db_set() {
    local key="$1"
    local value="$2"

    # Validate input
    if [[ -z "$key" || -z "$value" ]]; then
        echo "Usage: db_set <key> <value>"
        return 1
    fi

    # Remove existing entry if present
    db_delete "$key" 2>/dev/null

    # Append the new key-value pair
    echo "${key}=${value}" >> "$DB_FILE"
    echo "OK"
}
```

## GET Operation

The GET operation retrieves a value by its key using `grep` and `cut`.

```bash
db_get() {
    local key="$1"

    if [[ -z "$key" ]]; then
        echo "Usage: db_get <key>"
        return 1
    fi

    # Search for the key and extract the value
    local result=$(grep "^${key}=" "$DB_FILE" | tail -1 | cut -d'=' -f2-)

    if [[ -n "$result" ]]; then
        echo "$result"
    else
        echo "(nil)"
        return 1
    fi
}
```

## DELETE Operation

The DELETE operation removes a key-value pair from the database.

```bash
db_delete() {
    local key="$1"

    if [[ -z "$key" ]]; then
        echo "Usage: db_delete <key>"
        return 1
    fi

    # Create a temp file without the key
    grep -v "^${key}=" "$DB_FILE" > "$DB_FILE.tmp"
    mv "$DB_FILE.tmp" "$DB_FILE"
    echo "OK"
}
```

## LIST Operation

The LIST operation shows all keys in the database.

```bash
db_list() {
    if [[ ! -s "$DB_FILE" ]]; then
        echo "(empty database)"
        return
    fi

    echo "Keys:"
    cut -d'=' -f1 "$DB_FILE" | sort | uniq
}
```

## Putting It All Together

Here's the complete script with a command-line interface:

```bash
#!/bin/bash

DB_FILE="$HOME/.simpledb"
touch "$DB_FILE"

case "$1" in
    set)
        db_set "$2" "$3"
        ;;
    get)
        db_get "$2"
        ;;
    delete)
        db_delete "$2"
        ;;
    list)
        db_list
        ;;
    *)
        echo "Simple Bash Database"
        echo "Usage: simpledb <command> [args]"
        echo ""
        echo "Commands:"
        echo "  set <key> <value>  - Store a value"
        echo "  get <key>          - Retrieve a value"
        echo "  delete <key>       - Delete a key"
        echo "  list               - List all keys"
        ;;
esac
```

## Usage Examples

```bash
# Store some values
./simpledb set name "John Doe"
./simpledb set email "john@example.com"
./simpledb set age 30

# Retrieve values
./simpledb get name
# Output: John Doe

# List all keys
./simpledb list
# Output:
# Keys:
# age
# email
# name

# Delete a key
./simpledb delete email
```

## Limitations and Improvements

This simple database has several limitations:

1. **No concurrent access handling** - Multiple processes writing simultaneously could corrupt data
2. **Linear search** - GET operations scan the entire file (O(n) complexity)
3. **No data types** - Everything is stored as strings

For a production system, you'd want to add:

- File locking for concurrent access
- Indexing for faster lookups
- Data type support
- Transaction support

## Conclusion

Building this simple database helps understand the fundamental concepts behind real databases. While you wouldn't use this in production, it's a valuable learning exercise that demonstrates file-based storage, CRUD operations, and shell scripting techniques.
