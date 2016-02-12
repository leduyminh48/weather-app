/**
 * Created by Duy_Minh_Le on 1/15/2016.
 */
define(["jquery",
    "lodash",
    "utils",
    "text!cityViewTmpl",
    "CityCollectionView"], function ($, _, utils, cityViewTmpl, CityCollectionView) {

    describe("CityCollectionView", function () {
        var cityCollectionView = new CityCollectionView(),
            paris = {
                cityName: "Paris",
                placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
            };
        it("should render city item view properly using cityViewTmpl", function () {
            spyOn(cityCollectionView, "cityTemplate");

            cityCollectionView.render();

            expect(cityCollectionView.cityTemplate).toHaveBeenCalled();
        });

        it("should add city item properly using method render", function () {
            spyOn(cityCollectionView, "render");

            cityCollectionView.addOne();

            expect(cityCollectionView.render).toHaveBeenCalled();
        });

        it("should render collection when needed", function () {

            spyOn(cityCollectionView, "render");
            spyOn(cityCollectionView.$listHolder, "html");

            cityCollectionView.addAll([paris, paris]);

            expect(cityCollectionView.render).toHaveBeenCalled();
            expect(cityCollectionView.$listHolder.html).toHaveBeenCalled();

            cityCollectionView.update(paris);

            expect(cityCollectionView.render.calls.count()).toBe(3);
        });

        it("should be able to get selected items and push to its pwn selected array", function () {
            spyOn(cityCollectionView.$listHolder, "find").and.returnValue([
                "<input type='checkbox' value='123'/>",
                "<input type='checkbox' value='456'/>"
            ]);

            cityCollectionView.getSelected();

            expect(cityCollectionView.$listHolder.find).toHaveBeenCalled();
            expect(cityCollectionView.selected.length).toBe(2);
        });

        it("should be able to remove items from list", function () {
            cityCollectionView.selected = [123, 456];

            spyOn($.fn, "remove");

            cityCollectionView.removeSelected();

            expect($.fn.remove).toHaveBeenCalled();

        });

        it("should be able to toggle button style", function () {
            spyOn(cityCollectionView.$addBtn, "toggleClass");
            spyOn(cityCollectionView.$deleteBtn, "toggleClass");

            cityCollectionView.toggleBtnStyle();

            expect(cityCollectionView.$addBtn.toggleClass).toHaveBeenCalledWith("selecting", cityCollectionView.adding);
            expect(cityCollectionView.$deleteBtn.toggleClass).toHaveBeenCalledWith("selecting", cityCollectionView.deleting);

            cityCollectionView.adding = true;

            expect(cityCollectionView.$deleteBtn.toggleClass).toHaveBeenCalledWith("has-selected", true);

            cityCollectionView.deleting = true;

            expect(cityCollectionView.$addBtn.toggleClass).toHaveBeenCalledWith("has-selected", true);
        });

        it("should be able to toggle button style", function () {

            spyOn(cityCollectionView.$menu, "toggleClass");

            cityCollectionView.toggleMenuStyle();

            expect(cityCollectionView.$menu.toggleClass).toHaveBeenCalled();
        });
    });
});