

class MediaItem{
    constructor(title, year, genre){
    this.title = title;
    this.year = year;
    this.genre = genre
    }

    getSummary() {

    }
}


class Book extends MediaItem{
    constructor(title, author, year, genre, pageCount){
        super(title, year, genre)
        this.author = author;
        this.pageCount = pageCount;
    }

    getSummary(){
        return `Book: ${this.title} by ${this.author}, ${this.pageCount} pages`;
    }
}


class Movie extends MediaItem{
     constructor(title, director,year, genre, durationMinutes) {
        super(title, year, genre)
        this.director = director;
        this.durationMinutes = durationMinutes; 
     }  

      getSummary(){
        return `Movie: ${this.title} directed by ${this.director}, ${this.durationMinutes} min.`
      }
}


class Library{
    constructor(){
        this.store = []
    }

    addItem(item){
        this.store.push(item)
    }

    search(term){
        for (const item of this.store){
            if (item.title.toLowerCase().includes(term.toLowerCase())){
                return item
            }
        }
        return "Item not found."
    }

    listByGenre(genre){
        const list = []
        for (const item of this.store){
            if(item.genre === genre){
                list.push(item)
            }
        }
        if(list.length === 0){return "genre not found"}
        else{ return list}
    }
}


// const lib = new Library();
// lib.addItem(new Book("Dune", "Frank Herbert", 1965, "Sci-Fi", 412))
// lib.addItem(new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155))

// console.log(lib.search("dune"));
// console.log(lib.listByGenre("Sci-Fi"));


