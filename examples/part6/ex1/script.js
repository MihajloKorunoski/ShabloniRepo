$(document).ready(function () {

    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _create() {
            this._super();
            this._setMenuOptions();
        },

        _setMenuOptions() {
            this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
        },

        _renderMenu(ul, items) {
            let currentCategory = "";

            items.forEach(item => {
                if (item.category !== currentCategory) {
                    ul.append(this._renderCategory(item.category));
                    currentCategory = item.category;
                }

                const li = this._renderItemData(ul, item);
                this._addCategoryLabel(li, item.category, item.label);
            });
        },

        _renderCategory(category) {
            return `<li class='ui-autocomplete-category'>${category}</li>`;
        },

        _addCategoryLabel(li, category, label) {
            if (category) {
                li.attr("aria-label", `${category} : ${label}`)
            }
        }
    });

    const autocompleteData = [
        {label: "anders", category: ""},
        {label: "andreas", category: ""},
        {label: "antal", category: ""},
        {label: "annhhx10", category: "Products"},
        {label: "annk K12", category: "Products"},
        {label: "annttop C13", category: "Products"},
        {label: "anders andersson", category: "People"},
        {label: "andreas andersson", category: "People"},
        {label: "andreas johnson", category: "People"}
    ];

    $("#search").catcomplete({
        delay: 0,
        source: autocompleteData
    });
});