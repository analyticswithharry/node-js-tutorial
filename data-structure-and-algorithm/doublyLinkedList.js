class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.current = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.current = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;
    }

    print() {
        let current = this.head;
        let values = [];

        while (current !== null) {
            values.push(current.data);
            current = current.next;
        }

        console.log(values.join(" <-> ") + " <-> null");
    }

    play() {
        if (this.current === null) {
            console.log("Playlist is empty");
            return;
        }

        console.log("Playing:", this.current.data);
    }

    nextSong() {
        if (this.current !== null && this.current.next !== null) {
            this.current = this.current.next;
            this.play();
        } else {
            console.log("No next song");
        }
    }

    previousSong() {
        if (this.current !== null && this.current.prev !== null) {
            this.current = this.current.prev;
            this.play();
        } else {
            console.log("No previous song");
        }
    }

    search(target) {
        let current = this.head;

        while (current !== null) {
            if (current.data === target) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    delete(target) {
        let current = this.head;

        while (current !== null) {
            if (current.data === target) {
                if (current.prev !== null) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next !== null) {
                    current.next.prev = current.prev;
                }

                if (this.current === current) {
                    this.current = current.next !== null
                        ? current.next
                        : current.prev;
                }

                current.next = null;
                current.prev = null;
                return;
            }

            current = current.next;
        }
    }
}

const playlist = new DoublyLinkedList();

playlist.append("Faded");
playlist.append("Alone");
playlist.append("The Countdown");
playlist.append("Titanium");

console.log("My Playlist:");
playlist.print();

playlist.play();
playlist.nextSong();
playlist.nextSong();
playlist.previousSong();

console.log(
    "Is Titanium in the playlist?",
    playlist.search("Titanium")
);

playlist.delete("Alone");
console.log("Updated Playlist:");
playlist.print();
