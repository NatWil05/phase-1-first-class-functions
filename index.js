
const receivesAFunction = (spy) => {
    return spy()
}

receivesAFunction(spy)

function returnsANamedFunction() {
    return function returnsANamedFunction() {

    }
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }

}