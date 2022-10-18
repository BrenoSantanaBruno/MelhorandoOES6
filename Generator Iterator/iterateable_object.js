let person = {
    name: 'Max',
    hobbies: ['Sports', 'Cookings'],
    [Symbol.iterator]: function() {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function () {
                let value = hobbies[i];
                i++;
                return {
                    value: value,
                    done: i > hobbies.length ? true : false
                };
            }
        };

    }
};

for (let hobby of person){
    console.log(hobby);
}