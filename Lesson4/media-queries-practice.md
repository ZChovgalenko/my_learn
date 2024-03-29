# Requirements

Add styles to [markup](media-queries-practice.html)

## Breakpoints values

- Large Desktop: 1800px
- Medium Desktop: 1200px
- Tablet Landscape: 960px
- Tabled Portrait: 768px
- Mobile: 320px

## From large Desktop

        1800px

- [X] 1 block -> 4 elements in a row: all equal width
- [X] 2 block -> 2 elements in a row: all equal width
- [X] 3 block -> 3 elements in a row: all 25% width
- [X] 4 block -> 3 elements in a row: 1 -> 25%, 2 -> 25% and 3 ->50%
- [X] 5 block -> 5 elements in a row: all equal width

## From medium desktop to large desktop

        1200px

- [X] 1 block -> 2 elements in a row: all equal width, so it will have 2 rows width: 50%
- [X] 2 block -> 2 elements in a row: all equal width
- [X] 3 block -> 3 elements: 1 -> 50%, 2 -> 50% and last 100%
- [X] 4 block -> 3 elements in a row: 1 -> 35%, 2 -> 30% and 3 ->35%
- [X] 5 block -> 3 or 2 elements in a row, all 33% width, centered in center of parent block

## From Tablet Landscape to medium desktop
 
        960px

- [X] 1 block -> 2 elements in a row: all equal width, so it will have 2 rows width: 50%
- [X] 2 block -> 2 elements in a row: all equal width
- [X] 3 block -> 3 elements in a row: all equal width
- [X] 4 block -> 3 elements in a row: 1 -> 35%, 2 -> 30% and 3 ->35%
- [X] 5 block -> 2 elements in a row, all equal width, the last one should be 100% width

## From Tablet Portrait to Tablet Landscape
 
        768px

- [X] 1 block -> all elements width: 50%
- [X] 2 block -> all elements width: 50%
- [X] 3 block -> 1 element in a row, full width
- [X] 4 block -> 1 and second: 50% and last element 100% width
- [X] 5 block -> 2 elements in a row, 50% width, last one is 100% width

## From Mobile to Tablet Portrait

    320px

- [X] 1 block -> all elements width: 50%
- [X] 2 block -> all elements width: 50%
- [X] 3 block -> 1 element in a row, full width 100% for all
- [X] 4 block -> 1 element in a row, full width 100% for all
- [X] 5 block -> all elements in 100% width