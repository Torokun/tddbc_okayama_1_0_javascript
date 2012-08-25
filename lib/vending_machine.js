var createVendingMachine = function () {
	var total = 0;
	var getTotalAmount = function() {
		return total;
	};

	var insertMoney = function(amount) {
		total += amount;
	}

	var payBack = function() {
		var chargeMoney = total;
		total = 0;
		return chargeMoney;
	}
	return {
		getTotalAmount : getTotalAmount,
		insertMoney : insertMoney,
		payBack : payBack
	};
};

exports.createVendingMachine = createVendingMachine;
