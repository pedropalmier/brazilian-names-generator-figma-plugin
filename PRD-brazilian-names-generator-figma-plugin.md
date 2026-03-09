# Overview

Figma plugin that generates realistic first and last names and inserts them into selected text layers.

# Core Functionality

- Generate random first names (male / female / random options)
- Generate random last names
- Generate full names (first + last)
- Insert generated names into selected text layers in Figma
- Create new layers for the generated text
- Support batch generation for multiple selected layers

# User Flow

1. User selects none, one or more text layers
2. User opens plugin: If the user selects no layer and keeps 0 in input “New layers”: “Generate” button is disabled.
3. User set up:
    1. Gender
    2. Format
    3. New layers
4. Click the “Generate” button
    - If the user selects no layer and enters a number >0 in input “New layers”: plugin creates the numbers of layers specified with the generated name(s) with the specified specs.
    - If the user selects one or more layers and enters a number greater than 0 in input “New layers”: plugin creates the numbers of layers specified and populate the selected layers with the generated name(s) with the specified specs.
    - If the user selects one or more layers and keeps number 0 in input “New layers”: plugin populates the selected layers with the generated name(s) with the specified specs.
5. Figma's native toast shows success message “Names generated, friend!”

# UI Specifications

### Layout

- Header
- Gender section with title and radio buttons for
    - Random
    - Female
    - Male
- Format section with toggle for surname
- New layers section with number only input
- Generate button

# Implementation Details

### Error Handling
- If the user put in the “New layers” input a number smaller than 0 (negative numbers), the plugin silently enters back “0” when the user leaves the field (blur-clamping).
- If the user put in the “New layers” input a number greater than 50, the plugin silent enters “50” when the user leaves the field (blur-clamping).
- Invalid layer types in selection: Show message "Select only text layers, friend!"

## Acceptance Criteria

- [ ]  Plugin generates names from local dataset (no network calls)
- [ ]  Works with single text layer selection
- [ ]  Works with multiple text layers (batch mode)
- [ ]  Respects gender filter when selected
- [ ]  Warning about if non-text layers in selection and returns an error message
- [ ]  New layers input only accepts numbers between 0 and 50.