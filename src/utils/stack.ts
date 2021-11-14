import { BrickType } from "../types/types";

interface IStack {
    push(item: (BrickType | null)): void;
    pop(): void;
    peek(): BrickType | null;
    isFull(): boolean;
    isEmpty(): boolean;
}

export class Stack implements IStack {
    private size = 10;
    private store: (BrickType | null)[];
    private top = -1;

    constructor(size: number) {
        this.size = size;
        this.store = Array(this.size).fill(null);
    }

    getStore(): (BrickType | null)[] {
        return this.store;
    }

    push(item: BrickType): void {
        if (this.isFull()) {
            throw Error('stack is full');
        }
        this.store[++this.top] = item;
    }
  
    pop(): void {
        if (this.isEmpty()) {
            throw Error('stack is empty');
        }
        this.store[this.top] = null;
        this.top -= 1;
    }
  
    peek(): BrickType | null {
        if (this.isEmpty()) {
            throw Error('stack is empty');
        }
      return this.store[this.top];
    }
  
    isFull(): boolean {
      return this.top === this.size - 1;
    }

    isEmpty(): boolean {
        return this.top === -1;
    }
}
