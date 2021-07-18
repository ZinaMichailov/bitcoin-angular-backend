(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zinam\Desktop\angular-bitcoin\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0NuV":
/*!*********************************************!*\
  !*** ./src/app/services/bitcoin.service.ts ***!
  \*********************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _storage_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service.js */ "AL5a");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class BitcoinService {
    constructor(http) {
        this.http = http;
        this.Rate_KEY = 'RateDB';
        this.Market_Price_KEY = 'MarketPriceDB';
        this.Confirmed_Transactions_KEY = 'ConfirmedTransactionsDB';
    }
    getRate(coins) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let rate = _storage_service_js__WEBPACK_IMPORTED_MODULE_1__["storageService"].load(this.Rate_KEY);
            if (rate)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(rate);
            return this.http.get('https://blockchain.info/tobtc?currency=USD&value=1')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                const rate = coins * res;
                _storage_service_js__WEBPACK_IMPORTED_MODULE_1__["storageService"].store(this.Rate_KEY, rate.toFixed(6));
                return rate;
            }));
        });
    }
    getMarketPrice() {
        const marketPrice = _storage_service_js__WEBPACK_IMPORTED_MODULE_1__["storageService"].load(this.Market_Price_KEY);
        if (marketPrice && (marketPrice === null || marketPrice === void 0 ? void 0 : marketPrice.length))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(marketPrice);
        return this.http.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.values.map(({ x, y }) => {
            return [(new Date(x * 1000).toLocaleDateString(['ban', 'id'])), y];
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(values => _storage_service_js__WEBPACK_IMPORTED_MODULE_1__["storageService"].store(this.Market_Price_KEY, values)));
    }
    getConfirmedTransactions() {
        const confirmedTransactions = _storage_service_js__WEBPACK_IMPORTED_MODULE_1__["storageService"].load(this.Confirmed_Transactions_KEY);
        if (confirmedTransactions && (confirmedTransactions === null || confirmedTransactions === void 0 ? void 0 : confirmedTransactions.length))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(confirmedTransactions);
        return this.http.get('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.values.map(({ x, y }) => {
            return [(new Date(x * 1000).toLocaleDateString(['ban', 'id'])), y];
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(values => _storage_service_js__WEBPACK_IMPORTED_MODULE_1__["storageService"].store(this.Confirmed_Transactions_KEY, values)));
    }
}
BitcoinService.ɵfac = function BitcoinService_Factory(t) { return new (t || BitcoinService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
BitcoinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BitcoinService, factory: BitcoinService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2uUW":
/*!*******************************************************************!*\
  !*** ./src/app/cmps/contact-preview/contact-preview.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactPreviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactPreviewComponent.ɵfac = function ContactPreviewComponent_Factory(t) { return new (t || ContactPreviewComponent)(); };
ContactPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPreviewComponent, selectors: [["contact-preview"]], inputs: { contact: "contact" }, decls: 4, vars: 2, consts: [[1, "contact-preview", "flex", "main-content"], ["alt", "contact", 3, "src"]], template: function ContactPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://i.pravatar.cc/150?u=" + ctx.contact._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.name);
    } }, styles: [".contact-preview[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-block-end: 1.25rem;\n  background-color: #ebebeb;\n  border-radius: 1.25rem;\n  padding: 0.3125rem 0.9375rem;\n}\n.contact-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.contact-preview[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.contact-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-inline-end: 1.875rem;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJDQ007RURBTixzQkFBQTtFQUNBLDRCQUFBO0FBRkQ7QUFJQztFQUNDLFNBQUE7QUFGRjtBQUtDO0VBQ0MsWUFBQTtBQUhGO0FBTUM7RUFDQyxXQUFBO0VBQ00sMkJBQUE7RUFDTixrQkFBQTtBQUpGIiwiZmlsZSI6ImNvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWN0LXByZXZpZXcge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJsb2NrLWVuZDogcmVtKDIwcHgpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRjbHI2O1xyXG5cdGJvcmRlci1yYWRpdXM6IHJlbSgyMHB4KTtcclxuXHRwYWRkaW5nOiByZW0oNXB4KSByZW0oMTVweCk7XHJcblxyXG5cdGg0IHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHR9XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdH1cclxuXHJcblx0aW1nIHtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiByZW0oMzBweCk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0fVxyXG59IiwiXG4vLyBDT0xPUiBQQUxFVFRFXG4kY2xyMTogIzJGNDg1ODtcbiRjbHIyOiAjZjBmNWY5O1xuJGNscjM6ICMwMDBjM2U7XG4kY2xyNDogI2Q4ZDhkODtcbiRjbHI1OiAjMDA4ZTliO1xuJGNscjY6ICNlYmViZWI7XG5cbi8vIExBWU9VVCBCUkVBS1BPSU5UU1xuJGJyZWFrLW1vYmlsZTogNDYwcHg7XG4kYnJlYWstbmFycm93OiA1NjBweDtcbiRicmVhay1ub3JtYWw6IDc0MHB4O1xuJGJyZWFrLXdpZGU6IDk2MHB4O1xuXG5cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "3ITz":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "4X3b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ContactService {
    constructor() {
        this._contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.contacts$ = this._contacts$.asObservable();
        this._filterBy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ term: '' });
        this.filterBy$ = this._filterBy$.asObservable();
    }
    query() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filterBy = this._filterBy$.getValue();
            let queryStr = !filterBy ? '' : `?term=${filterBy.term}`;
            const contacts = yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].get(`contact${queryStr}`);
            this._contacts$.next(this._sort(contacts));
        });
    }
    setFilter(filterBy) {
        this._filterBy$.next(filterBy);
        this.query();
    }
    getEmptyContact() {
        return { name: '', email: '', phone: '' };
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const contact = yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].get(`contact/${id}`);
            return contact;
        });
    }
    remove(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].delete(`contact/${id}`);
            return this._contacts$.subscribe(contacts => {
                contacts = contacts.filter(contact => contact._id !== id);
            });
        });
    }
    save(contact) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const savedContact = contact._id ?
                yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].put(`contact/${contact._id}`, contact) :
                yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].post(`contact/`, contact);
            return savedContact;
        });
    }
    _sort(contacts) {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4X3b":
/*!******************************************!*\
  !*** ./src/app/services/http.service.js ***!
  \******************************************/
/*! exports provided: httpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpService", function() { return httpService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// import {router} from '@/router'

const BASE_URL =  false
    ? undefined
    : '//localhost:3030/api/'
// const BASE_URL = '/api/'



var axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    withCredentials: true
})

const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        // if (err.response && err.response.status === 401) {
            // Depends on routing startegy - hash or history
            // window.location.assign('/#/login')
            // window.location.assign('/login')
            // router.push('/login')
        // }
        throw err
    }
}

/***/ }),

/***/ "8FSX":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/transfer-fund/transfer-fund.component */ "sLIO");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/move-list/move-list.component */ "L8zA");






const _c0 = function (a1) { return ["/edit", a1]; };
class ContactDetailsComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data.contact;
        });
        this.loggedinUser = this.userService.getLoggedInUser();
        if (!this.loggedinUser)
            return this.movesForContact = null;
        this.movesForContact = this.loggedinUser.moves.filter(move => move.toId === this.route.snapshot.params.id);
    }
    onTransfer(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.addMove(this.contact, ev.target.amount.value);
            ev.target.amount.value = null;
            this.router.navigateByUrl('/');
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) { return new (t || ContactDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactDetailsComponent, selectors: [["contact-details"]], decls: 15, vars: 10, consts: [[1, "contact-details", "flex-col"], [1, "actions", "main-content", "flex-between"], ["routerLink", "/contact"], ["src", "../../../assets/img/back.png", "alt", ""], [3, "routerLink"], ["src", "../../../assets/img/edit.png", "alt", ""], ["alt", "contact", 3, "src"], [3, "contact", "onTransfer"], [3, "moves", "isShowTo"]], template: function ContactDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "transfer-fund", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onTransfer", function ContactDetailsComponent_Template_transfer_fund_onTransfer_13_listener($event) { return ctx.onTransfer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "move-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.contact._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://i.pravatar.cc/150?u=" + ctx.contact._id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", ctx.contact.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Phone: ", ctx.contact.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contact", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("moves", ctx.movesForContact)("isShowTo", false);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_4__["TransferFundComponent"], _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_5__["MoveListComponent"]], styles: [".contact-details[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.contact-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  margin-block-end: 1.25rem;\n  border-radius: 50%;\n}\n.contact-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-block-end: 0.625rem;\n}\n.contact-details[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin: 1.875rem 0;\n}\n.contact-details[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.5625rem;\n  cursor: pointer;\n}\n@media (max-width: 460px) {\n  .contact-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 6.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQUE7QUEyQkEsa0JBQUE7QUN2QkE7RUFDSSxtQkFBQTtBQURKO0FBR0k7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSwwQkFBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtBQUhSO0FBS1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFIWjtBRGhCRTtFQ3dCTTtJQUNJLGNBQUE7RUFMVjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1lZGlhIHF1ZXJpZXMgQnJlYWtwb2ludCBtaXhpbnMgKi9cblxuQG1peGluIGZvci1tb2JpbGUtbGF5b3V0IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZm9yLW5hcnJvdy1sYXlvdXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW5hcnJvdykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBmb3Itbm9ybWFsLWxheW91dCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbm9ybWFsKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGZvci13aWRlLWxheW91dCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstd2lkZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLyogTWVkaWEgIE1peGlucyAqL1xuXG4vL2FzcGVjdCByYXRpbyBtaXhpblxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xuICAgIH1cbiAgICA+ICoge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH0gIFxuICAgID4gaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gTWl4aW4gZm9yIHJlbW92aW5nIGhvdmVyIGVmZWN0cyBvbiBpcGhvbmUgc2NyZWVuXG4gIEBtaXhpbiBob3Zlci1zdXBwb3J0ZWQgeyAgICBcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9taXhpbnNcIjtcclxuXHJcbi5jb250YWN0LWRldGFpbHMge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogcmVtKDIwMHB4KTtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiByZW0oMjBweCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiByZW0oMTBweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgICBtYXJnaW46IHJlbSgzMHB4KSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiByZW0oMjVweCk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiByZW0oMTAwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "AL5a":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.js ***!
  \*********************************************/
/*! exports provided: storageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageService", function() { return storageService; });
function store(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}
const storageService = {
    store,
    load
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DTH3":
/*!******************************************************************!*\
  !*** ./src/app/pages/statistic-page/statistic-page.component.ts ***!
  \******************************************************************/
/*! exports provided: StatisticPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticPageComponent", function() { return StatisticPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/bitcoin.service */ "0NuV");
/* harmony import */ var _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/chart/chart.component */ "ppaa");



class StatisticPageComponent {
    constructor(bitcoinService) {
        this.bitcoinService = bitcoinService;
    }
    ngOnInit() {
        this.marketPrice = this.bitcoinService.getMarketPrice();
        this.confirmedTransactions = this.bitcoinService.getConfirmedTransactions();
    }
}
StatisticPageComponent.ɵfac = function StatisticPageComponent_Factory(t) { return new (t || StatisticPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"])); };
StatisticPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticPageComponent, selectors: [["statistic-page"]], decls: 3, vars: 6, consts: [[1, "statistic-page"], [3, "data", "title", "vTitle"]], template: function StatisticPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.marketPrice)("title", "Market price")("vTitle", "Price [$]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.confirmedTransactions)("title", "Confirmed transactions")("vTitle", "Transactions [$]");
    } }, directives: [_cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: [".statistic-page[_ngcontent-%COMP%] {\n  padding-block-start: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGF0aXN0aWMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoic3RhdGlzdGljLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdGlzdGljLXBhZ2Uge1xyXG4gICAgcGFkZGluZy1ibG9jay1zdGFydDogNTBweDtcclxufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "IOHS":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-edit/contact-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function ContactEditComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactEditComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onRemoveContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactEditComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactEditComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ContactEditComponent {
    constructor(contactService, route, router) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            if (!Object.keys(data).length) {
                this.contact = this.contactService.getEmptyContact();
            }
            else {
                this.contact = data.contact;
            }
        });
    }
    onSaveContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.contactService.save(this.contact);
            this.router.navigateByUrl('/contact');
        });
    }
    onRemoveContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.contactService.remove(this.contact._id);
            this.router.navigateByUrl('/contact');
        });
    }
}
ContactEditComponent.ɵfac = function ContactEditComponent_Factory(t) { return new (t || ContactEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactEditComponent, selectors: [["app-contact-edit"]], decls: 22, vars: 6, consts: [[1, "contact-edit"], [1, "actions", "main-layout", "flex-between"], ["routerLink", "/contact"], ["src", "../../../assets/img/back.png", "alt", ""], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "submit"], ["for", "name"], ["required", "", "type", "text", "id", "name", "name", "name", 3, "ngModel", "ngModelChange"], ["for", "email"], ["required", "", "type", "email", "id", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["required", "", "type", "text", "id", "phone", "name", "phone", 3, "ngModel", "ngModelChange"], [1, "btn", "save-btn"], [3, "click"], ["src", "../../../assets/img/delete.png", "alt", ""]], template: function ContactEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContactEditComponent_button_4_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ContactEditComponent_h1_5_Template, 2, 0, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ContactEditComponent_h1_6_Template, 2, 0, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ContactEditComponent_Template_form_submit_7_listener() { return ctx.onSaveContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_11_listener($event) { return ctx.contact.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_15_listener($event) { return ctx.contact.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_Template_input_ngModelChange_19_listener($event) { return ctx.contact.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.contact._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.phone);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".contact-edit[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 1.875rem;\n}\n.contact-edit[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-block-end: 1.875rem;\n}\n.contact-edit[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-block-end: 1.25rem;\n  justify-content: center;\n}\n.contact-edit[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n.contact-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.4375rem;\n  border-radius: 10px;\n  border: 1px solid #d8d8d8;\n  width: 13.75rem;\n}\n.contact-edit[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%] {\n  display: block;\n  margin: 1.875rem auto;\n}\n.contact-edit[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin: 1.875rem auto;\n}\n.contact-edit[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.5625rem;\n}\n.contact-edit[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBRko7QUFJSTtFQUNJLDBCQUFBO0FBRlI7QUFLSTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUFIUjtBQU1JO0VBQ0ksc0JBQUE7QUFKUjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBUUk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFOUjtBQVNJO0VBQ0kscUJBQUE7QUFQUjtBQVNRO0VBQ0ksZ0JBQUE7QUFQWjtBQVVRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVJaIiwiZmlsZSI6ImNvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWN0LWVkaXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IHJlbSgzMHB4KTtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogcmVtKDMwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0gPiAqIHtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiByZW0oMjBweCk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogcmVtKDEwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBwYWRkaW5nOiByZW0oN3B4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgd2lkdGg6IHJlbSgyMjBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhdmUtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IHJlbSgzMHB4KSBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgICBtYXJnaW46IHJlbSgzMHB4KSBhdXRvO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogcmVtKDI1cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bitcoin.service */ "0NuV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/move-list/move-list.component */ "L8zA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function HomePageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "move-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hello ", ctx_r0.loggedinUser.name, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Coins: $", ctx_r0.loggedinUser.coins, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("BTC: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, ctx_r0.rate$), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("moves", ctx_r0.loggedinUser.moves)("isShowTo", true);
} }
function HomePageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your gateway to Bitcoin & beyond");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "The tools and information you need to buy, sell, trade, invest, and spend cryptocurrencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Try Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HomePageComponent {
    constructor(userService, bitcoinService) {
        this.userService = userService;
        this.bitcoinService = bitcoinService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loggedinUser = this.userService.getLoggedInUser();
            if (this.loggedinUser)
                this.rate$ = yield this.bitcoinService.getRate(this.loggedinUser.coins);
        });
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__["BitcoinService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["home-page"]], decls: 3, vars: 2, consts: [[1, "home-page"], ["class", "user-container flex-col", 4, "ngIf"], ["class", "home-page-init flex", 4, "ngIf"], [1, "user-container", "flex-col"], [1, "coins", "flex-center"], ["src", "../../../assets/img/coins.png", "alt", ""], [1, "btc", "flex-center"], ["src", "../../../assets/img/bitcoin.png", "alt", ""], [3, "moves", "isShowTo"], [1, "home-page-init", "flex"], [1, "content"], [1, "signup-btn"], ["routerLink", "/signup", 1, "btn"], ["src", "../../../assets/img/homepage.svg", "alt", "", 1, "homepage-svg"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePageComponent_div_1_Template, 13, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomePageComponent_div_2_Template, 10, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedinUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedinUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_5__["MoveListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".home-page[_ngcontent-%COMP%] {\n  max-width: 68.75rem;\n  padding: 0 1.5rem;\n  margin: auto;\n  overflow: hidden;\n}\n.home-page[_ngcontent-%COMP%]   .user-container[_ngcontent-%COMP%] {\n  align-items: center;\n  padding-block-start: 3.125rem;\n}\n.home-page[_ngcontent-%COMP%]   .user-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-block-end: 1.25rem;\n}\n.home-page[_ngcontent-%COMP%]   .user-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-inline-end: 0.625rem;\n  width: 1.875rem;\n}\n.home-page[_ngcontent-%COMP%]   .user-container[_ngcontent-%COMP%]   .btc[_ngcontent-%COMP%] {\n  margin-block-end: 3.125rem;\n}\n.home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%] {\n  min-height: 88vh;\n  gap: 0.625rem;\n  padding: 0 5rem;\n}\n.home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .homepage-svg[_ngcontent-%COMP%] {\n  max-width: 25rem;\n  position: relative;\n  bottom: 0;\n  right: 0;\n}\n.home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-top: 2.5rem;\n}\n.home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  max-width: 17ch;\n  font-size: 2.1875rem;\n  margin-bottom: 1.25rem;\n}\n.home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5625rem;\n}\n@media (max-width: 460px) {\n  .home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    padding: 0;\n  }\n  .home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .homepage-svg[_ngcontent-%COMP%] {\n    max-width: 15.625rem;\n    padding-top: 1.25rem;\n    margin: 0 auto;\n  }\n  .home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-top: 1.25rem;\n  }\n  .home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    max-width: none;\n    font-size: 1.625rem;\n    margin-bottom: 0.9375rem;\n    text-align: center;\n  }\n  .home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .home-page[_ngcontent-%COMP%]   .home-page-init[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQUE7QUEyQkEsa0JBQUE7QUN2QkE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdJO0VBQ0UseUJBQUE7QUFETjtBQUlJO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0FBRk47QUFLSTtFQUNFLDBCQUFBO0FBSE47QUFPRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFMSjtBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBTE47QUFRSTtFQUNFLG1CQUFBO0FBTk47QUFRTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFOUjtBQVNNO0VBQ0Usd0JBQUE7QUFQUjtBRHpDRTtFQ3NERTtJQUNFLDhCQUFBO0lBQ0EsVUFBQTtFQVZKO0VBWUk7SUFDRSxvQkFBQTtJQUNBLG9CQUFBO0lBQ0EsY0FBQTtFQVZOO0VBYUk7SUFDRSxvQkFBQTtFQVhOO0VBYU07SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtJQUNBLGtCQUFBO0VBWFI7RUFjTTtJQUNFLGtCQUFBO0VBWlI7RUFlTTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VBYlI7QUFDRiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZWRpYSBxdWVyaWVzIEJyZWFrcG9pbnQgbWl4aW5zICovXG5cbkBtaXhpbiBmb3ItbW9iaWxlLWxheW91dCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGZvci1uYXJyb3ctbGF5b3V0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVhay1uYXJyb3cpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZm9yLW5vcm1hbC1sYXlvdXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW5vcm1hbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBmb3Itd2lkZS1sYXlvdXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLXdpZGUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8qIE1lZGlhICBNaXhpbnMgKi9cblxuLy9hc3BlY3QgcmF0aW8gbWl4aW5cbkBtaXhpbiBhc3BlY3QtcmF0aW8oJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXRvcDogKCRoZWlnaHQgLyAkd2lkdGgpICogMTAwJTtcbiAgICB9XG4gICAgPiAqIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9ICBcbiAgICA+IGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxuICBAbWl4aW4gaG92ZXItc3VwcG9ydGVkIHsgICAgXG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvbWl4aW5zXCI7XHJcblxyXG4uaG9tZS1wYWdlIHtcclxuICBtYXgtd2lkdGg6IHJlbSgxMTAwcHgpO1xyXG4gIHBhZGRpbmc6IDAgcmVtKDI0cHgpO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAudXNlci1jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IHJlbSg1MHB4KTtcclxuXHJcbiAgICA+ICoge1xyXG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiByZW0oMjBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IHJlbSgxMHB4KTtcclxuICAgICAgd2lkdGg6IHJlbSgzMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRjIHtcclxuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogcmVtKDUwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhvbWUtcGFnZS1pbml0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDg4dmg7XHJcbiAgICBnYXA6IHJlbSgxMHB4KTtcclxuICAgIHBhZGRpbmc6IDAgcmVtKDgwcHgpO1xyXG5cclxuICAgIC5ob21lcGFnZS1zdmcge1xyXG4gICAgICBtYXgtd2lkdGg6IHJlbSg0MDBweCk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiByZW0oNDBweCk7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxN2NoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDM1cHgpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IHJlbSgyMHB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogcmVtKDI1cHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICAuaG9tZS1wYWdlLWluaXQge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAuaG9tZXBhZ2Utc3ZnIHtcclxuICAgICAgICBtYXgtd2lkdGg6IHJlbSgyNTBweCk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IHJlbSgyMHB4KTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiByZW0oMjBweCk7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogcmVtKDI2cHgpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogcmVtKDE1cHgpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaWdudXAtYnRuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHJlbSgyMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "L8zA":
/*!*******************************************************!*\
  !*** ./src/app/cmps/move-list/move-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MoveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveListComponent", function() { return MoveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../move-preview/move-preview.component */ "fD3m");



function MoveListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "move-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const move_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("move", move_r1)("isShowTo", ctx_r0.isShowTo);
} }
class MoveListComponent {
    constructor() { }
    ngOnInit() {
    }
}
MoveListComponent.ɵfac = function MoveListComponent_Factory(t) { return new (t || MoveListComponent)(); };
MoveListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoveListComponent, selectors: [["move-list"]], inputs: { moves: "moves", isShowTo: "isShowTo" }, decls: 4, vars: 1, consts: [[1, "moves-list", "flex-col", "main-content"], [4, "ngFor", "ngForOf"], [3, "move", "isShowTo"]], template: function MoveListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your last moves:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoveListComponent_div_3_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moves);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_2__["MovePreviewComponent"]], styles: [".moves-list[_ngcontent-%COMP%] {\n  justify-content: center;\n  background-color: #ebebeb;\n  text-align: center;\n  margin-block-end: 1.25rem;\n  border-radius: 0.3125rem;\n  padding: 0.9375rem 1.875rem;\n}\n.moves-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-block-end: 0.625rem;\n}\n.moves-list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #cac9c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZlLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDQyx1QkFBQTtFQUNHLHlCQ0VHO0VEREgsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUlJO0VBQ0ksMkJBQUE7QUFGUjtBQUtJO0VBQ0ksZ0NBQUE7QUFIUiIsImZpbGUiOiJtb3ZlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcblxyXG4ubW92ZXMtbGlzdCB7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyNjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IHJlbSgyMHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHJlbSg1cHgpO1xyXG4gICAgcGFkZGluZzogcmVtKDE1cHgpIHJlbSgzMHB4KTtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZy1ibG9jay1lbmQ6IHJlbSgxMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDIsIDIwMSwgMjAxKTtcclxuICAgIH1cclxufSIsIlxuLy8gQ09MT1IgUEFMRVRURVxuJGNscjE6ICMyRjQ4NTg7XG4kY2xyMjogI2YwZjVmOTtcbiRjbHIzOiAjMDAwYzNlO1xuJGNscjQ6ICNkOGQ4ZDg7XG4kY2xyNTogIzAwOGU5YjtcbiRjbHI2OiAjZWJlYmViO1xuXG4vLyBMQVlPVVQgQlJFQUtQT0lOVFNcbiRicmVhay1tb2JpbGU6IDQ2MHB4O1xuJGJyZWFrLW5hcnJvdzogNTYwcHg7XG4kYnJlYWstbm9ybWFsOiA3NDBweDtcbiRicmVhay13aWRlOiA5NjBweDtcblxuXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "QyWd":
/*!*************************************************************!*\
  !*** ./src/app/cmps/contact-list/contact-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-preview/contact-preview.component */ "2uUW");




const _c0 = function (a1) { return ["/contact", a1]; };
function ContactListComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "contact-preview", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trackBy", ctx_r0.trackByFn)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, contact_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r1);
} }
class ContactListComponent {
    constructor() { }
    ngOnInit() {
    }
    trackByFn(contact) {
        return contact._id;
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["contact-list"]], inputs: { contacts: "contacts" }, decls: 2, vars: 1, consts: [[1, "contact-list", "flex-col", "main-layout"], [3, "trackBy", "routerLink", 4, "ngFor", "ngForOf"], [3, "trackBy", "routerLink"], [3, "contact"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactListComponent_a_1_Template, 2, 5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_3__["ContactPreviewComponent"]], styles: [".contact-list[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-bottom: 3.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxtQkFBQTtFQUNBLHVCQUFBO0FBREQiLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcblxyXG4uY29udGFjdC1saXN0IHtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IHJlbSg1MHB4KTtcclxufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'angular-bitcoin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UR78":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/contact-filter/contact-filter.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFilterComponent", function() { return ContactFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contact.service */ "3ITz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ContactFilterComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        this.subscription = this.contactService.filterBy$.subscribe(filterBy => {
            this.filterBy = filterBy;
        });
    }
    onSetFilter() {
        this.contactService.setFilter(this.filterBy);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ContactFilterComponent.ɵfac = function ContactFilterComponent_Factory(t) { return new (t || ContactFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFilterComponent, selectors: [["contact-filter"]], decls: 2, vars: 1, consts: [[1, "contact-filter", "main-layout"], ["type", "text", "name", "term", "placeholder", "Search", 3, "ngModel", "ngModelChange"]], template: function ContactFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactFilterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filterBy.term = $event; })("ngModelChange", function ContactFilterComponent_Template_input_ngModelChange_1_listener() { return ctx.onSetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterBy.term);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".contact-filter[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.875rem;\n}\n.contact-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.3125rem;\n  border-radius: 0.625rem;\n  border: 1px solid #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUZSIiwiZmlsZSI6ImNvbnRhY3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRhY3QtZmlsdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IHJlbSgzMHB4KTtcclxuICAgIFxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IHJlbSg1cHgpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY2xyNDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "VfMH":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-app/contact-app.component.ts ***!
  \************************************************************/
/*! exports provided: ContactAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAppComponent", function() { return ContactAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contact.service */ "3ITz");
/* harmony import */ var _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/contact-filter/contact-filter.component */ "UR78");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cmps/contact-list/contact-list.component */ "QyWd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ContactAppComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        this.contactService.query();
        this.contacts$ = this.contactService.contacts$;
    }
}
ContactAppComponent.ɵfac = function ContactAppComponent_Factory(t) { return new (t || ContactAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactAppComponent, selectors: [["contact-app"]], decls: 7, vars: 3, consts: [[1, "contact-app"], [3, "contacts"], ["routerLink", "/edit", 1, "btn"]], template: function ContactAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "contact-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "contact-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.contacts$));
    } }, directives: [_cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_2__["ContactFilterComponent"], _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__["ContactListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".contact-app[_ngcontent-%COMP%] {\n  padding-top: 3.125rem;\n  padding-bottom: 3.125rem;\n}\n.contact-app[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 8.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7QUFGSjtBQUlJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRlIiLCJmaWxlIjoiY29udGFjdC1hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcblxyXG4uY29udGFjdC1hcHAge1xyXG4gICAgcGFkZGluZy10b3A6IHJlbSg1MHB4KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiByZW0oNTBweCk7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IHJlbSgxMzBweCk7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmps/contact-filter/contact-filter.component */ "UR78");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmps/contact-list/contact-list.component */ "QyWd");
/* harmony import */ var _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmps/contact-preview/contact-preview.component */ "2uUW");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "8FSX");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "IOHS");
/* harmony import */ var _pages_contact_app_contact_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/contact-app/contact-app.component */ "VfMH");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _pages_statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/statistic-page/statistic-page.component */ "DTH3");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/transfer-fund/transfer-fund.component */ "sLIO");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/move-list/move-list.component */ "L8zA");
/* harmony import */ var _cmps_move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cmps/move-preview/move-preview.component */ "fD3m");
/* harmony import */ var _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cmps/chart/chart.component */ "ppaa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_6__["ContactFilterComponent"],
        _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"],
        _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_8__["ContactPreviewComponent"],
        _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_9__["ContactDetailsComponent"],
        _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_10__["ContactEditComponent"],
        _pages_contact_app_contact_app_component__WEBPACK_IMPORTED_MODULE_11__["ContactAppComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"],
        _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_13__["AppHeaderComponent"],
        _pages_statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_14__["StatisticPageComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
        _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_16__["TransferFundComponent"],
        _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_17__["MoveListComponent"],
        _cmps_move_preview_move_preview_component__WEBPACK_IMPORTED_MODULE_18__["MovePreviewComponent"],
        _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_19__["ChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ePKA":
/*!******************************************************!*\
  !*** ./src/app/services/contact-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: ContactResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactResolverService", function() { return ContactResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.service */ "3ITz");



class ContactResolverService {
    constructor(contactService) {
        this.contactService = contactService;
    }
    resolve(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { id } = route.params;
            const contact = yield this.contactService.getById(id);
            return contact;
        });
    }
}
ContactResolverService.ɵfac = function ContactResolverService_Factory(t) { return new (t || ContactResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
ContactResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactResolverService, factory: ContactResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fD3m":
/*!*************************************************************!*\
  !*** ./src/app/cmps/move-preview/move-preview.component.ts ***!
  \*************************************************************/
/*! exports provided: MovePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovePreviewComponent", function() { return MovePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MovePreviewComponent_article_0_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To: ", ctx_r1.move.to, "");
} }
function MovePreviewComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovePreviewComponent_article_0_p_1_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("At: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx_r0.move.at, "short"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Amount: $", ctx_r0.move.amount, "");
} }
class MovePreviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
MovePreviewComponent.ɵfac = function MovePreviewComponent_Factory(t) { return new (t || MovePreviewComponent)(); };
MovePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovePreviewComponent, selectors: [["move-preview"]], inputs: { move: "move", isShowTo: "isShowTo" }, decls: 1, vars: 1, consts: [["class", "move-preview", 4, "ngIf"], [1, "move-preview"], [4, "ngIf"]], template: function MovePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovePreviewComponent_article_0_Template, 7, 6, "article", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.move);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".move-preview[_ngcontent-%COMP%] {\n  padding: 0.75rem 0;\n}\n.move-preview[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtBQURKO0FBR0k7RUFDSSxTQUFBO0FBRFIiLCJmaWxlIjoibW92ZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcblxyXG4ubW92ZS1wcmV2aWV3IHtcclxuICAgIHBhZGRpbmc6IHJlbSgxMnB4KSAwO1xyXG5cclxuICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function SignupComponent_div_1_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignupComponent_div_1_form_1_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter your email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_1_form_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.loginCred.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Enter your password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_1_form_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.loginCred.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.loginCred.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.loginCred.password);
} }
function SignupComponent_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.isLogin = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "For Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_div_1_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignupComponent_div_1_form_3_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.onSignup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter your full name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_1_form_3_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.singupCred.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Enter your email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_1_form_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.singupCred.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Enter your password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_1_form_3_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.singupCred.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sing up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.singupCred.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.singupCred.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.singupCred.password);
} }
function SignupComponent_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_div_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.isLogin = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "For Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_1_form_1_Template, 9, 2, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_div_1_button_2_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignupComponent_div_1_form_3_Template, 12, 3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SignupComponent_div_1_button_4_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
} }
function SignupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hi! ", ctx_r1.loggedinUser.name, "");
} }
class SignupComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginCred = { email: 'guest@gmail.com', password: 'guest' };
        this.singupCred = this.userService.getEmptySingUpCred();
        this.loggedinUser = this.userService.getLoggedInUser();
        this.isLogin = true;
    }
    ngOnInit() {
    }
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.login(this.loginCred);
            this.router.navigateByUrl('/');
        });
    }
    onSignup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.signup(this.singupCred);
            this.router.navigateByUrl('/');
        });
    }
    onLogout() {
        this.userService.logout();
        this.loggedinUser = null;
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["signup"]], decls: 3, vars: 2, consts: [[1, "sign-up"], [4, "ngIf"], ["class", "logout", 4, "ngIf"], ["class", "login", 3, "submit", 4, "ngIf"], ["class", "btn", 3, "click", 4, "ngIf"], ["class", "sign-up", 3, "submit", 4, "ngIf"], [1, "login", 3, "submit"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "text", "id", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], [1, "btn"], [1, "btn", 3, "click"], [1, "sign-up", 3, "submit"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], [1, "logout"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedinUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedinUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".sign-up[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 18.75rem;\n  margin: 3.125rem auto 1.5625rem;\n}\n.sign-up[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n}\n.sign-up[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.3125rem;\n  border-radius: 0.625rem;\n  border: 1px solid #d8d8d8;\n  width: 13.75rem;\n}\n.sign-up[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  padding-top: 3.125rem;\n  text-align: center;\n}\n.sign-up[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.875rem;\n}\n.sign-up[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFIUjtBQUtRO0VBQ0ksdUJBQUE7QUFIWjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUpaO0FBUUk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBTlI7QUFRUTtFQUNJLHVCQUFBO0FBTlo7QUFVSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBUlIiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNpZ24tdXAge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiByZW0oMzAwcHgpO1xyXG4gICAgICAgIG1hcmdpbjogcmVtKDUwcHgpIGF1dG8gcmVtKDI1cHgpO1xyXG5cclxuICAgICAgICA+ICoge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiByZW0oMTBweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHJlbSg1cHgpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiByZW0oMTBweCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgICAgIHdpZHRoOiByZW0oMjIwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9nb3V0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogcmVtKDUwcHgpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiByZW0oMzBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ppaa":
/*!***********************************************!*\
  !*** ./src/app/cmps/chart/chart.component.ts ***!
  \***********************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ChartComponent {
    constructor() {
        this.options = {
            colors: ['#8dd6e9'],
            backgroundColor: 'transparent',
            hAxis: {
                title: 'Date'
            },
            vAxis: {
                title: ''
            },
            legend: 'left'
        };
        this.type = 'AreaChart';
        this.width = screen.width * 0.95;
        this.height = screen.width * 0.4;
    }
    ngOnInit() {
        this.options.vAxis.title = this.vTitle;
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["chart"]], inputs: { title: "title", data: "data", columnNames: "columnNames", vTitle: "vTitle" }, decls: 5, vars: 8, consts: [[1, "chart"], [1, "chart-headline"], [1, "chart", 3, "type", "data", "width", "height", "options"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "google-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.data))("width", ctx.width)("height", ctx.height)("options", ctx.options);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".chart[_ngcontent-%COMP%] {\n  margin: 0 auto 5rem;\n}\n.chart[_ngcontent-%COMP%]   .chart-headline[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 460px) {\n  .chart[_ngcontent-%COMP%] {\n    margin: 0 auto 3.125rem;\n  }\n  .chart[_ngcontent-%COMP%]   .chart-headline[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBQTtBQTJCQSxrQkFBQTtBQ3ZCQTtFQUNJLG1CQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QURKRTtFQ0NGO0lBUVEsdUJBQUE7RUFETjtFQUdNO0lBQ0ksb0JBQUE7RUFEVjtBQUNGIiwiZmlsZSI6ImNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVkaWEgcXVlcmllcyBCcmVha3BvaW50IG1peGlucyAqL1xuXG5AbWl4aW4gZm9yLW1vYmlsZS1sYXlvdXQge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBmb3ItbmFycm93LWxheW91dCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbmFycm93KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGZvci1ub3JtYWwtbGF5b3V0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVhay1ub3JtYWwpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZm9yLXdpZGUtbGF5b3V0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVhay13aWRlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vKiBNZWRpYSAgTWl4aW5zICovXG5cbi8vYXNwZWN0IHJhdGlvIG1peGluXG5AbWl4aW4gYXNwZWN0LXJhdGlvKCR3aWR0aCwgJGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZy10b3A6ICgkaGVpZ2h0IC8gJHdpZHRoKSAqIDEwMCU7XG4gICAgfVxuICAgID4gKiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfSAgXG4gICAgPiBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICB9XG4gIFxuICAvLyBNaXhpbiBmb3IgcmVtb3ZpbmcgaG92ZXIgZWZlY3RzIG9uIGlwaG9uZSBzY3JlZW5cbiAgQG1peGluIGhvdmVyLXN1cHBvcnRlZCB7ICAgIFxuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL21peGluc1wiO1xyXG5cclxuLmNoYXJ0IHtcclxuICAgIG1hcmdpbjogMCBhdXRvIHJlbSg4MHB4KTtcclxuXHJcbiAgICAuY2hhcnQtaGVhZGxpbmUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGluY2x1ZGUgZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIHJlbSg1MHB4KTtcclxuXHJcbiAgICAgICAgLmNoYXJ0LWhlYWRsaW5lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiByZW0oMTVweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "4X3b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




// const USERS = [
//     {
//         name: 'Puki Ben David',
//         email: 'puki@gmail.com',
//         password: '1234',
//         coins: 100,
//         moves: [
//             {
//                 toId: '5a56640269f443a5d64b32ca',
//                 to: 'Ochoa Hyde',
//                 at: 1618056214923,
//                 amount: 20
//             },
//             {
//                 amount: 5,
//                 at: 1619355164509,
//                 to: "Dominique Soto",
//                 toId: "5a566402abce24c6bfe4699d"
//             },
//             {
//                 amount: 10,
//                 at: 1619355991441,
//                 to: "Faulkner Flores",
//                 toId: "5a566402f90ae30e97f990db" 
//             }
//         ]
//     }
// ]
class UserService {
    constructor() {
        this._users$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.users$ = this._users$.asObservable();
    }
    query() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const users = yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].get(`user`);
            this._users$.next(users);
        });
    }
    login(loginCred) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].post('auth/login', loginCred);
            if (user)
                return this._saveLocalUser(user);
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sessionStorage.clear();
            return yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].post('auth/logout');
        });
    }
    signup(signupCred) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].post('auth/signup', signupCred);
            return this._saveLocalUser(user);
        });
    }
    getEmptySingUpCred() {
        return {
            name: '',
            email: '',
            password: '',
            coins: 100,
            moves: []
        };
    }
    addMove(contact, amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let user = Object.assign({}, this.getLoggedInUser());
            amount = parseInt(amount);
            if (user.coins >= amount) {
                const move = { toId: contact._id, to: contact.name, at: Date.now(), amount };
                user.moves = [...user.moves, move];
                user.coins -= amount;
                user = yield _http_service__WEBPACK_IMPORTED_MODULE_2__["httpService"].put(`user/${user._id}`, user);
                if (this.getLoggedInUser()._id === user._id)
                    this._saveLocalUser(user);
            }
        });
    }
    getLoggedInUser() {
        return JSON.parse(sessionStorage.getItem(('loggedinUser') || false));
    }
    _saveLocalUser(user) {
        sessionStorage.setItem('loggedinUser', JSON.stringify(user));
        return user;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sLIO":
/*!***************************************************************!*\
  !*** ./src/app/cmps/transfer-fund/transfer-fund.component.ts ***!
  \***************************************************************/
/*! exports provided: TransferFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFundComponent", function() { return TransferFundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class TransferFundComponent {
    constructor() {
        this.onTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
TransferFundComponent.ɵfac = function TransferFundComponent_Factory(t) { return new (t || TransferFundComponent)(); };
TransferFundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferFundComponent, selectors: [["transfer-fund"]], inputs: { contact: "contact" }, outputs: { onTransfer: "onTransfer" }, decls: 9, vars: 1, consts: [[1, "transfer-fund", "main-content"], [3, "submit"], ["for", "amount"], ["type", "number", "id", "amount", "name", "amount"], [1, "btn"]], template: function TransferFundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TransferFundComponent_Template_form_submit_3_listener($event) { return ctx.onTransfer.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transfer coins to ", ctx.contact.name, ":");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".transfer-fund[_ngcontent-%COMP%] {\n  margin: 2.5rem auto;\n  background-color: #008e9b;\n  border-radius: 0.3125rem;\n  padding: 15px 0;\n}\n.transfer-fund[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-block-end: 1.25rem;\n}\n.transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 0.625rem;\n}\n.transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 0.625rem;\n  border: 1px solid #d8d8d8;\n  padding: 0.3125rem;\n  background-color: inherit;\n}\n@media (max-width: 460px) {\n  .transfer-fund[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n  }\n  .transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n    margin-inline-end: 0;\n    margin-block-end: 0.9375rem;\n  }\n  .transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 40%;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcc2V0dXBcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0cmFuc2Zlci1mdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFBO0FBMkJBLGtCQUFBO0FDdkJBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0FBRko7QUFJSTtFQUNFLDJCQUFBO0FBRk47QUFLSTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSE47QURwQkU7RUM0QkU7SUFDRSxvQkFBQTtFQUxKO0VBUUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUFOSjtFQVFJO0lBQ0Usb0JBQUE7SUFDQSwyQkFBQTtFQU5OO0VBU0k7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQVBOO0FBQ0YiLCJmaWxlIjoidHJhbnNmZXItZnVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1lZGlhIHF1ZXJpZXMgQnJlYWtwb2ludCBtaXhpbnMgKi9cblxuQG1peGluIGZvci1tb2JpbGUtbGF5b3V0IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZm9yLW5hcnJvdy1sYXlvdXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW5hcnJvdykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBmb3Itbm9ybWFsLWxheW91dCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbm9ybWFsKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGZvci13aWRlLWxheW91dCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstd2lkZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLyogTWVkaWEgIE1peGlucyAqL1xuXG4vL2FzcGVjdCByYXRpbyBtaXhpblxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xuICAgIH1cbiAgICA+ICoge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH0gIFxuICAgID4gaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gTWl4aW4gZm9yIHJlbW92aW5nIGhvdmVyIGVmZWN0cyBvbiBpcGhvbmUgc2NyZWVuXG4gIEBtaXhpbiBob3Zlci1zdXBwb3J0ZWQgeyAgICBcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9taXhpbnNcIjtcclxuXHJcbi50cmFuc2Zlci1mdW5kIHtcclxuICBtYXJnaW46IHJlbSg0MHB4KSBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjbHI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IHJlbSg1cHgpO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuXHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogcmVtKDIwcHgpO1xyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4taW5saW5lLWVuZDogcmVtKDEwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogcmVtKDEwcHgpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY2xyNDtcclxuICAgICAgcGFkZGluZzogcmVtKDVweCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDE1cHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICAgICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IHJlbSgxNXB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "uOz6":
/*!*********************************************************!*\
  !*** ./src/app/cmps/app-header/app-header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return { exact: true }; };
class AppHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 10, vars: 2, consts: [[1, "flex-center"], ["routerLink", "", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["src", "../../../assets/img/home.png", "alt", ""], ["routerLink", "/signup", "routerLinkActive", "active"], ["src", "../../../assets/img/add-user.png", "alt", ""], ["routerLink", "/contact", "routerLinkActive", "active"], ["src", "../../../assets/img/users.png", "alt", ""], ["routerLink", "/statistic", "routerLinkActive", "active"], ["src", "../../../assets/img/increase.png", "alt", ""]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%] {\n  background-color: #2F4858;\n  color: #f0f5f9;\n  padding: 0.8125rem 2.5rem;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #f0f5f9;\n  cursor: pointer;\n  width: 2.1875rem;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 1.875rem;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0kseUJDRkc7RURHTixjQ0ZNO0VER04seUJBQUE7QUFGRDtBQUtFO0VBQ0MscUJBQUE7RUFDQSxjQ1JJO0VEU0osZUFBQTtFQUNBLGdCQUFBO0FBSEg7QUFLRztFQUNDLHNCQUFBO0FBSEo7QUFNRztFQUNDLFlBQUE7QUFKSiIsImZpbGUiOiJhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL3ZhcmlhYmxlcyc7XHJcblxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNscjE7XHJcblx0Y29sb3I6ICRjbHIyO1xyXG5cdHBhZGRpbmc6IHJlbSgxM3B4KSByZW0oNDBweCk7XHJcblxyXG5cdG5hdiB7XHJcblx0XHQ+ICoge1xyXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdGNvbG9yOiAkY2xyMjtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHR3aWR0aDogcmVtKDM1cHgpO1xyXG5cclxuXHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHJlbSgzMHB4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0b3BhY2l0eTogMC42O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59IiwiXG4vLyBDT0xPUiBQQUxFVFRFXG4kY2xyMTogIzJGNDg1ODtcbiRjbHIyOiAjZjBmNWY5O1xuJGNscjM6ICMwMDBjM2U7XG4kY2xyNDogI2Q4ZDhkODtcbiRjbHI1OiAjMDA4ZTliO1xuJGNscjY6ICNlYmViZWI7XG5cbi8vIExBWU9VVCBCUkVBS1BPSU5UU1xuJGJyZWFrLW1vYmlsZTogNDYwcHg7XG4kYnJlYWstbmFycm93OiA1NjBweDtcbiRicmVhay1ub3JtYWw6IDc0MHB4O1xuJGJyZWFrLXdpZGU6IDk2MHB4O1xuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_contact_app_contact_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact-app/contact-app.component */ "VfMH");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "8FSX");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "IOHS");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/statistic-page/statistic-page.component */ "DTH3");
/* harmony import */ var _services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/contact-resolver.service */ "ePKA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: 'contact/:id', component: _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_2__["ContactDetailsComponent"], resolve: { contact: _services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ContactResolverService"] } },
    { path: 'edit/:id', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_3__["ContactEditComponent"], resolve: { contact: _services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ContactResolverService"] } },
    { path: 'contact', component: _pages_contact_app_contact_app_component__WEBPACK_IMPORTED_MODULE_1__["ContactAppComponent"] },
    { path: 'edit', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_3__["ContactEditComponent"] },
    { path: 'statistic', component: _pages_statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_6__["StatisticPageComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map