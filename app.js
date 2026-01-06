// Problem 1: Digital Library System

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



//Problem 2 (Extra): Banking System with Transactions


class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if(amount > this.balance){
            return "There is not enough money in the account"  
        }
        this.balance -= amount;
    }
}


class Bank{
    constructor(){
    this.accounts = []
    }

    addAccount(account){
        this.accounts.push(account)
    }

    transfer(fromName, toName, amount){
        for(const account1 of this.accounts){
            if(account1.owner === fromName){
                for(let account2 of this.accounts){
                    if(account2.owner === toName){
                        if(account2.balance >= amount){
                            account1.balance += amount
                            account2.balance -= amount
                            return "Transfer completed successfully."
                        } else{
                            return "There is not enough money in the account for the transfer."
                        }
                    } else{
                        return `account ${toName} not found`
                    }
                }
            } else{
                return `account ${fromName} not found`
            }
        }
    }

    showBalances(){
        for (const account of this.accounts)
            console.log(account.owner, account.balance);      
    }
}