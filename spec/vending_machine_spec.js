// 最初はブレストする。それぞれのテストは依存させない。シナリオは考えなくて良い//
// 総計は０円
// １０円を入れると、総計が１０円になる
// １００円を入れると、総計が１００円になる
// １０円と１００円を入れると、総計が１１０円になる
// １０円を入れて、払い戻しを行うと、つり銭として、１０円が出力される。
// １０円をいれて、払い戻しを行うと、総計が０円になる

var createVendingMachine = require('../lib/vending_machine').createVendingMachine;

describe('Vending Machine', function() {
	var vm;
	beforeEach(function() {
		vm = createVendingMachine();
	});
	describe('硬貨を投入していない場合', function() {
		it('総計は０円', function() {
			expect(vm.getTotalAmount()).toEqual(0);	
		});
	});
	
	describe('硬化を投入する場合', function() {
		it('１０円を入れると、総計が１０円になる', function() {
			vm.insertMoney(10);
			expect(vm.getTotalAmount()).toEqual(10);	
		});
		it('１００円を入れると、総計が１００円になる', function() {
			vm.insertMoney(100);
			expect(vm.getTotalAmount()).toEqual(100);	
		});
		it('１０円と１００円を入れると、総計が１１０円になる', function() {
			vm.insertMoney(10);
			vm.insertMoney(100);
			expect(vm.getTotalAmount()).toEqual(110);	
		});
	});
});
