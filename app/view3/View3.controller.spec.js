describe('View3Controller', function() {


    var $controller, romanNumeralTranslatorService;
    var ctrl;

    beforeEach(function() {

        module('myApp.view3');

        inject(function($rootScope, $controller, _romanNumeralTranslatorService_) {
            // create a scope object for us to use.
            $scope = $rootScope.$new();
            romanNumeralTranslatorService = _romanNumeralTranslatorService_;

            ctrl = $controller('View3Controller', {
                $scope: $scope,
                romanNumeralTranslatorService: romanNumeralTranslatorService
            });
        });
    });


    describe('Initialization', function() {
        //all Initialization states of variables here for decimalInteger and romanInteger
        it('should have decimalInteger as an empty string', function() {
            expect(ctrl.decimalInteger).toBe('');
        });

        it('should have romanInteger as an empty string', function() {
            expect(ctrl.romanInteger).toBe('');
        });
    });


    describe('translate()', function() {

        it('should assign the value returned by romanNumeralTranslatorService.translate when no error occurs', function() {

            spyOn(romanNumeralTranslatorService, 'translate').and.returnValue('mockResponse')

            ctrl.translate();

            expect(ctrl.romanInteger).toEqual('mockResponse');

        });
		




    });


});