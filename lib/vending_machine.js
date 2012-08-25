var createVendingMachine = function () {
	var totalAmount = 0;
	var getTotalAmount = function() {
		return totalAmount;
	};

	var insertMoney = function(amount) {
		totalAmount += amount;
	}

	var payBack = function() {
		var chargeMoney = totalAmount;
		totalAmount = 0;
		return chargeMoney;
	}
	return {
		getTotalAmount : getTotalAmount,
		insertMoney : insertMoney,
		payBack : payBack
	};
};

exports.createVendingMachine = createVendingMachine;
