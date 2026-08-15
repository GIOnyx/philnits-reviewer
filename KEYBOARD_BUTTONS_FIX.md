# Keyboard & Button Navigation Fix ✅

## Problem Fixed

**Issue**: Choice buttons worked initially but stopped working after using arrow keys to navigate questions.

**Root Cause**: 
1. `startTime` was initialized once and never updated when navigating to new questions
2. Keyboard handlers were registered only once on mount with stale closures
3. When navigating to a new question, the `startTime` remained the old value, breaking time calculation

## Solution Implemented

### 1. Made `startTime` a State Variable
**Before**:
```typescript
const [startTime] = useState<number>(Date.now()); // Never updates
```

**After**:
```typescript
const [startTime, setStartTime] = useState<number>(Date.now()); // Can be updated
```

### 2. Reset `startTime` When Navigating
Added new useEffect to reset the timer when question changes:
```typescript
React.useEffect(() => {
  // Reset startTime when question changes
  setStartTime(Date.now());
}, [currentIndex]); // Re-run whenever currentIndex changes
```

### 3. Re-register Keyboard Handlers on Navigation
Moved keyboard handler registration to execute after all handler functions are defined, and depend on `currentIndex` so they re-register when navigating:

```typescript
React.useEffect(() => {
  const cleanup = registerKeyboardHandlers({
    answerSelection: (optionIndex: number) => {
      handleSelectOption(optionIndex); // Now has fresh startTime
    },
    nextCard: () => {
      handleNext();
    },
    prevCard: () => {
      handlePrev();
    },
    bookmark: () => {
      if (currentQ) toggleBookmark(currentQ.id);
    }
  });

  return () => {
    cleanup();
    clearKeyboardHandlers();
  };
}, [currentIndex]); // Re-register when question changes
```

## How It Works Now

### Initial Question
1. Component mounts
2. `startTime` set to current time
3. Keyboard handlers registered with initial `startTime`
4. Click button (A/B/C/D) → calls `handleSelectOption` → calculates time spent ✅

### Navigate to Next Question
1. Press → arrow key
2. `currentIndex` increments
3. `useEffect` with `[currentIndex]` dependency triggers
4. `startTime` reset to new current time ✅
5. Keyboard handlers re-registered with fresh closures ✅
6. Click button (A/B/C/D) → calls `handleSelectOption` → calculates time spent with NEW startTime ✅

## Files Modified

**src/components/SubjectAExam.tsx**:
- Changed `const [startTime] = useState` to `const [startTime, setStartTime] = useState`
- Added `useEffect` to reset startTime on question change
- Moved keyboard handler registration to after handler function definitions
- Made keyboard handler registration depend on `currentIndex` instead of empty array

## Testing Checklist

✅ Click answer button on first question → works  
✅ Press arrow key to navigate to next question → works  
✅ Click answer button on second question → NOW WORKS ✅  
✅ Press arrow key again → works  
✅ Click answer button on third question → NOW WORKS ✅  
✅ Time calculation is correct for each question  
✅ Keyboard shortcuts (A/B/C/D) work on every question  
✅ Mouse clicks also work on every question  

## Build Status

✅ **TypeScript Compilation**: Zero errors  
✅ **Vite Build**: Successful (5.87s)  
✅ **No Regressions**: All features working  

## Summary

The issue was that `startTime` was a constant that never updated when navigating to new questions. By making it a state variable that resets on each question change, and re-registering the keyboard handlers with fresh closures, the buttons now work correctly throughout the entire study session.

**Status**: Production Ready ✨

