var createVendingMachine = function () {
	var total = 0;
	var getTotalAmount = function() {
		return total;
	};

	var insertMoney = function(amount) {
		total = amount;
	}
	return {
		getTotalAmount : getTotalAmount,
		insertMoney : insertMoney
	};
};

exports.createVendingMachine = createVendingMachine;
