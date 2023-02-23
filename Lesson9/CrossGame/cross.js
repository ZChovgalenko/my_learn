const X = 'x';
const ZERO = '0';
const EMPTY = ' ';
const ROW_LINE = 'row';
const COLUMN_LINE ='column';
const DIAGONAL_LINE ='diagonal';
const GAME_ENDED = 'ended';
const GAME_STARTED = 'started';
const GAME_NOT_STARTED = 'not started';

/**
 * @typedef {object} TLine 
 * @property {type: typeof ROW_LINE | type of COLUMN_LINE | typeof DIAGONAL_LINE} type
 * @property {number} index
 * @property {(X | ZERO | EMPTY) []} cells
*/

const cross = {
    board: new Array(9).fill(EMPTY),
    currentUser: X,
    allUsers: [X, ZERO],
    status: GAME_NOT_STARTED,
    stepCount: 0,
    /**
     * @returns {undefined}
     */
    start() {
        cross.board = new Array(9).fill(EMPTY);
        cross.currentUser = X;
        cross.status = GAME_STARTED;
        cross.stepCount = 0;

        cross.renderBoard();
    }, 
    
    /** 
     * @param {number} cell - index in board 
     */
    step: function (cell) {

        if(cross.status !== GAME_STARTED) {
            throw new Error(`Game not started`);
        }
        // X, ZERO, EMPTY
        const cellVelue = cross.board[cell];
        const board = [].concat(cross.board);

        if(cellVelue !== EMPTY) {
            throw new Error(`Can't do step in ${cell} position, because this position is not empty`);
        }

        board[cell] = cross.currentUser;
        cross.board = board;

        /** @type {typeof X | typeof ZERO} */
        const nextUser = cross.allUsers.find(user => user !== cross.currentUser);
        
        /** @type {TLine | undefined} */
        const winLine = cross.getWinLine();
        
        if(winLine) {
            //if winLine is object --> TLine  true
            cross.status = GAME_ENDED; 
            
            cross.renderBoard();
            console.log(`Winner : ${cross.currentUser}`);
            return;
        }
        
        //if winLine is undefined --> false
        cross.currentUser = nextUser;
        cross.stepCount++;

        cross.renderBoard();

        return;
    },

    /**
     * @returns {TLine | undefined}
     */
    getWinLine: function(){
        const lines = cross.getLines();
        const currentUser = cross.currentUser;
        /**
         * @type {Tline | undefined} 
         */
        const winLine = lines.find(line => cross.isLineWin(line, currentUser));

        return winLine;
    },

    getRow(i) {
        const board = cross.board;
        return {
                cells: [
                    board[i * 3],
                    board[i * 3 + 1],
                    board[i * 3 + 2],
                ],
                type: ROW_LINE,
                index: i,
            };
    },
    /**
     * @returns { TLine[] }
     */
    getLines() {
        const lines = [];
        const board = cross.board;

        for( let i = 0; i < 3; i++) {
            const row = cross.getRow(i);
            const column = {
                cells: [ 
                    board[i],
                    board[i + 3],
                    board[i + 6],
                ],
                type: COLUMN_LINE,
                index: i,
            };

            lines.push(row, column);
        }

        lines.push (
            {   cells: [
                    board[0],
                    board[4],
                    board[8],
                ],
                type: DIAGONAL_LINE,
                index: 0,
            },

            {   cells: [
                    board[2],
                    board[4],
                    board[6],
            ],
                type: DIAGONAL_LINE,
                index: 1,
            },
        )

        return lines;
    },
    
    /**
     * @param {TLine} line 
     * @param {typeof X | typeof ZERO} currentUser
     * 
     * @returns {boolean}
     */
    isLineWin(line, currentUser = cross.currentUser) {
        return line.cells
            .every(el => el === currentUser);
    },

    renderBoard: function () {
        console.log('current User:', cross.currentUser, 'step:', cross.stepCount +1);
        
        for(let rowIndex = 0; rowIndex < 3; rowIndex++) {
            console.log( cross.getRow(rowIndex).cells.join(' | '));
        }
    },
};

cross.start();