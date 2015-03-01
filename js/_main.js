var PizzaCalculator = function(passedOptions) {
	var obj = {
			initialize: function() {
				this.addEventListeners();
			},
			calculate: function() {
				var personCount = parseInt($('input[name="personCount"]').val(), 10),
					oneSliceLessRule = true,
					averageSlicePerPerson = 3,
					averageSlicesPerPizza = 8,
					magicEquation = averageSlicePerPerson / averageSlicesPerPizza,
					result;

				//result = (personCount + 1) * magicEquation;


				// If someone is willing to forgo a slice AND in doing so would also forgo needing to buy another pizza for a single slice.
				if (oneSliceLessRule && ((personCount * averageSlicePerPerson - 1) / averageSlicesPerPizza) % 1 === 0) {
					result = ((personCount * averageSlicePerPerson - 1) / averageSlicesPerPizza);
				}
				// 
				else if (Math.round(personCount * magicEquation) > personCount * magicEquation) {
					result = Math.round(personCount * magicEquation);
				}
				// (personCount + 1) * magicEquation
				else if (Math.round((personCount + 1) * magicEquation) > (personCount + 1) * magicEquation) {
					result = Math.round((personCount + 1) * magicEquation);
				}
				else {
					result = Math.round(personCount * magicEquation);
				}
				return result;
			},
			addEventListeners: function() {
				var that = this;
				$('input[name="personCount"]').on("change", function() {
					that.updateNumber();
				});
			},
			updateNumber: function() {
				$('#resultContainer').text(this.calculate());
			}
		};

	obj.options = {};
	obj.options = passedOptions;
	obj.initialize();

	return obj;
};


$(document).ready(function() {
	var calc = new PizzaCalculator();
	calc.updateNumber();
});