var createVendingMachine = function () {
	var totalAmount = 0;
	var getTotalAmount = function() {
		return totalAmount;
	};

	var insertMoney = function(amount) {
		if(amount != 10 && amount != 50 && amount != 100 && amount != 500 && amount != 1000) {
			return;
		}
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
