describe('romanNumeralTranslatorService', function() {
    "use strict";

    beforeEach(module('myApp.view3'));

    var romanNumeralTranslatorService;

    beforeEach(inject(function(_romanNumeralTranslatorService_) {
        romanNumeralTranslatorService = _romanNumeralTranslatorService_;
    }));


    describe('translate()', function() {

        it('should romanNumeralTranslatorService exist', function() {
            expect(romanNumeralTranslatorService).toBeDefined();
        });

        it('should contain romanNumeralTranslatorService with translate exist', function() {
            expect(romanNumeralTranslatorService.translate).toBeDefined();
        });

        it('should return an empty string if input is negative', function() {

            var returnedValue = romanNumeralTranslatorService.translate(-1);

            expect(returnedValue).toBe('');

        });

        it('should return I if input is 1', function() {

            var returnedValue = romanNumeralTranslatorService.translate(1);

            expect(returnedValue).toBe('I');

        });
        it('should return XXXIX if input is 39', function() {

            var returnedValue = romanNumeralTranslatorService.translate(39);

            expect(returnedValue).toBe('XXXIX');

        });

        it('should return  XLIX if input is 49', function() {

            var returnedValue = romanNumeralTranslatorService.translate(49);

            expect(returnedValue).toBe('XLIX');

        });

        it('should return LXXXIX if input is 89', function() {

            var returnedValue = romanNumeralTranslatorService.translate(89);

            expect(returnedValue).toBe('LXXXIX');

        });
        it('should return XCIX if input is 99', function() {

            var returnedValue = romanNumeralTranslatorService.translate(99);

            expect(returnedValue).toBe('XCIX');

        });

        it('should return CCCXCIX if input is 399', function() {

            var returnedValue = romanNumeralTranslatorService.translate(399);

            expect(returnedValue).toBe('CCCXCIX');

        });
        it('should return CDLXXXIX if input is 489', function() {

            var returnedValue = romanNumeralTranslatorService.translate(489);

            expect(returnedValue).toBe('CDLXXXIX');

        });
        it('should return XDIX if input is 499', function() {

            var returnedValue = romanNumeralTranslatorService.translate(499);

            expect(returnedValue).toBe('XDIX');

        });
        it('should return DCCCXCIX if input is 899', function() {

            var returnedValue = romanNumeralTranslatorService.translate(899);

            expect(returnedValue).toBe('DCCCXCIX');

        });
        it('should return CMXCIX if input is 999', function() {

            var returnedValue = romanNumeralTranslatorService.translate(999);

            expect(returnedValue).toBe('CMXCIX');

        });
        it('should return  MMMDCCCLXXXVII if input is 3887', function() {

            var returnedValue = romanNumeralTranslatorService.translate(3887);

            expect(returnedValue).toBe('MMMDCCCLXXXVII');

        });
        it('should thrown an error', function() {
            expect(function() {
                    romanNumeralTranslatorService.translate(4000)
                })
                .toThrow(new Error('invalid number, max value = 3888'));
        });

    });

});