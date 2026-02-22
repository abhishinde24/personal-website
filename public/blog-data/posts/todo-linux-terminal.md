# Adding Todo Functionality in the Linux Terminal

A command-line todo application is one of the most practical tools you can build for yourself. In this guide, we'll create a simple but effective todo manager that runs entirely in your terminal.

## Why a CLI Todo App?

- **Speed** - No need to switch to a browser or open an app
- **Always available** - If you have a terminal open, you have your todos
- **Scriptable** - Can be integrated into your workflow
- **Lightweight** - No dependencies, just bash

## Project Setup

Let's create a todo script that can be run from anywhere.

```bash
#!/bin/bash

# Configuration
TODO_FILE="$HOME/.todos"
DONE_FILE="$HOME/.todos.done"

# Create files if they don't exist
touch "$TODO_FILE"
touch "$DONE_FILE"
```

## Adding Tasks

The add function appends a new task with a timestamp and unique ID.

```bash
todo_add() {
    if [[ -z "$*" ]]; then
        echo "Error: Please provide a task description"
        echo "Usage: todo add <task description>"
        return 1
    fi

    # Generate a simple ID based on line count
    local id=$(($(wc -l < "$TODO_FILE") + 1))
    local timestamp=$(date "+%Y-%m-%d %H:%M")
    local task="$*"

    # Format: ID|TIMESTAMP|TASK
    echo "${id}|${timestamp}|${task}" >> "$TODO_FILE"
    echo "Added task #${id}: ${task}"
}
```

## Listing Tasks

Display all pending tasks in a nice format.

```bash
todo_list() {
    if [[ ! -s "$TODO_FILE" ]]; then
        echo "No pending tasks. You're all caught up!"
        return
    fi

    echo "Pending Tasks:"
    echo "=============="

    while IFS='|' read -r id timestamp task; do
        printf "[%3s] %s\n      Added: %s\n\n" "$id" "$task" "$timestamp"
    done < "$TODO_FILE"
}
```

## Completing Tasks

Mark a task as done by moving it to the completed file.

```bash
todo_done() {
    local target_id="$1"

    if [[ -z "$target_id" ]]; then
        echo "Error: Please provide a task ID"
        echo "Usage: todo done <task_id>"
        return 1
    fi

    # Find the task
    local task_line=$(grep "^${target_id}|" "$TODO_FILE")

    if [[ -z "$task_line" ]]; then
        echo "Error: Task #${target_id} not found"
        return 1
    fi

    # Move to done file with completion timestamp
    local completed=$(date "+%Y-%m-%d %H:%M")
    echo "${task_line}|COMPLETED:${completed}" >> "$DONE_FILE"

    # Remove from todo file
    grep -v "^${target_id}|" "$TODO_FILE" > "$TODO_FILE.tmp"
    mv "$TODO_FILE.tmp" "$TODO_FILE"

    # Extract task description for confirmation
    local task=$(echo "$task_line" | cut -d'|' -f3)
    echo "Completed: ${task}"
}
```

## Removing Tasks

Delete a task without marking it as complete.

```bash
todo_remove() {
    local target_id="$1"

    if [[ -z "$target_id" ]]; then
        echo "Error: Please provide a task ID"
        echo "Usage: todo remove <task_id>"
        return 1
    fi

    local task_line=$(grep "^${target_id}|" "$TODO_FILE")

    if [[ -z "$task_line" ]]; then
        echo "Error: Task #${target_id} not found"
        return 1
    fi

    grep -v "^${target_id}|" "$TODO_FILE" > "$TODO_FILE.tmp"
    mv "$TODO_FILE.tmp" "$TODO_FILE"

    local task=$(echo "$task_line" | cut -d'|' -f3)
    echo "Removed: ${task}"
}
```

## Viewing Completed Tasks

Show the history of completed tasks.

```bash
todo_history() {
    if [[ ! -s "$DONE_FILE" ]]; then
        echo "No completed tasks yet."
        return
    fi

    echo "Completed Tasks:"
    echo "================"

    while IFS='|' read -r id timestamp task completed; do
        printf "[%3s] %s\n      Added: %s\n      %s\n\n" \
            "$id" "$task" "$timestamp" "$completed"
    done < "$DONE_FILE"
}
```

## Clearing All Tasks

Reset everything - use with caution!

```bash
todo_clear() {
    read -p "Are you sure you want to clear all tasks? (y/N) " confirm

    if [[ "$confirm" =~ ^[Yy]$ ]]; then
        > "$TODO_FILE"
        > "$DONE_FILE"
        echo "All tasks cleared."
    else
        echo "Operation cancelled."
    fi
}
```

## The Complete Script

Here's the full script with command-line interface:

```bash
#!/bin/bash

TODO_FILE="$HOME/.todos"
DONE_FILE="$HOME/.todos.done"
touch "$TODO_FILE" "$DONE_FILE"

# ... (include all functions above)

# Main command handler
case "$1" in
    add)
        shift
        todo_add "$@"
        ;;
    list|ls)
        todo_list
        ;;
    done)
        todo_done "$2"
        ;;
    remove|rm)
        todo_remove "$2"
        ;;
    history)
        todo_history
        ;;
    clear)
        todo_clear
        ;;
    *)
        echo "Todo - A simple command-line task manager"
        echo ""
        echo "Usage: todo <command> [arguments]"
        echo ""
        echo "Commands:"
        echo "  add <task>     Add a new task"
        echo "  list           List all pending tasks"
        echo "  done <id>      Mark a task as completed"
        echo "  remove <id>    Remove a task"
        echo "  history        Show completed tasks"
        echo "  clear          Clear all tasks"
        ;;
esac
```

## Installation

1. Save the script as `todo` in a directory in your PATH (e.g., `~/bin/`)
2. Make it executable: `chmod +x ~/bin/todo`
3. Start using it!

## Usage Examples

```bash
# Add some tasks
todo add "Review pull request #123"
todo add "Write documentation for API"
todo add "Fix login bug"

# List tasks
todo list
# Output:
# Pending Tasks:
# ==============
# [  1] Review pull request #123
#       Added: 2024-01-15 10:30
#
# [  2] Write documentation for API
#       Added: 2024-01-15 10:31
#
# [  3] Fix login bug
#       Added: 2024-01-15 10:32

# Complete a task
todo done 1
# Output: Completed: Review pull request #123

# Remove a task
todo remove 3
# Output: Removed: Fix login bug
```

## Enhancements to Consider

1. **Priority levels** - Add high/medium/low priorities
2. **Due dates** - Set deadlines for tasks
3. **Categories** - Organize tasks by project
4. **Search** - Find tasks by keyword
5. **Sync** - Back up to cloud storage

## Conclusion

This simple todo application demonstrates how powerful shell scripting can be for building practical tools. With just a few functions and a text file, we have a fully functional task manager that's fast, reliable, and always available in your terminal.
