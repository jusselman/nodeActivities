const listDB = [
    {activity: 'Breakdancing', completed: false},
    {activity: 'Shopping', completed: true},
    {activity: 'Food Prep', completed: false},
    {activity: 'Code', completed: true},
];

module.exports = {
    grabAll: function() {
        return listDB
    }
}