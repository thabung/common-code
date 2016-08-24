'use strict';
mainApp.factory('ExpenseCalculator', function () {
    var ec = {};
    ec.calculateSummary = function (expenseData) {
        var res = {};
        //$scope.totalExpense = 0;
        res.totalExpense = 0;
        angular.forEach(expenseData, function (val) {
            res.totalExpense += val.expense;

        });
        res.perHead = res.totalExpense / expenseData.length;
        //$scope.finalExpenseSummary = [];
        res.finalExpenseSummary = []
        angular.forEach(expenseData, function (val) {
            res.finalExpenseSummary.push(
                    {
                        name: val.first_name,
                        pay_get: val.expense - res.perHead,
                        expense: val.expense
                    });

        });
        return res;
    }
    return ec;

});

