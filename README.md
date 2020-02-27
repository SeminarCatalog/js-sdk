# SeminarCatalog Javascript SDK

![npm](https://img.shields.io/npm/v/@seminarcatalog/sdk)
![GitHub package.json version](https://img.shields.io/github/package-json/v/SeminarCatalog/js-sdk)
![David](https://img.shields.io/david/seminarcatalog/sdk)

This project is the official Javascript API client implementation for the [SeminarCatalog](https://www.databay.de/landing-pages/seminarmanagement)
developed by the [Databay AG](https://www.databay.de).

## Table of contents

* [Installation](#installation)
    * [yarn](#yarn)
    * [npm](#npm)
* [Getting Started](#getting-started)
* [Contributing](#contributing)
* [License](#license)
* [Documentation](#documentation)
    * [Api Endpoints](#documentation-for-api-endpoints)
    * [Models](#documentation-for-models)
    * [Authorization](#documentation-for-authorization)
* [Appendix](#appendix)

## Installation

### yarn

Install this package via yarn:

```shell
yarn add @seminarcatalog/sdk
```

### npm

Install this package via npm:

```shell
npm install @seminarcatalog/sdk --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SeminarCatalogApi = require('@seminarcatalog/sdk');

// Singleton
const api = SeminarCatalogApi.AddressApi

// Constructor
// const api = new SeminarCatalogApi.AddressApiClass()
api.addressCreate().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Contributing

SeminarCatalog/js-sdk is an [open-source project](#license) which is mainly developed and maintained by [Databay AG](https://www.databay.de).
You're interested in checking out how seminarcatalog/js-sdk works and/or want to contribute to this project? Then checkout our [contribution guide](CONTRIBUTING.md)!

## License

This project is licensed under the MIT License. See [LICENSE document](/LICENSE).

## Documentation

### Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SeminarCatalogApi.AddressApi* | [**addressCreate**](docs/AddressApi.md#addressCreate) | **POST** /api/address | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.AddressApi* | [**addressDelete**](docs/AddressApi.md#addressDelete) | **DELETE** /api/address/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.AddressApi* | [**addressGet**](docs/AddressApi.md#addressGet) | **GET** /api/address/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.AddressApi* | [**addressList**](docs/AddressApi.md#addressList) | **GET** /api/address | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.AddressApi* | [**addressUpdate**](docs/AddressApi.md#addressUpdate) | **PUT** /api/address/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.AllocationWaitingListApi* | [**allocationwaitinglistCreate**](docs/AllocationWaitingListApi.md#allocationwaitinglistCreate) | **POST** /api/allocationwaitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.AllocationWaitingListApi* | [**allocationwaitinglistDelete**](docs/AllocationWaitingListApi.md#allocationwaitinglistDelete) | **DELETE** /api/allocationwaitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.AllocationWaitingListApi* | [**allocationwaitinglistGet**](docs/AllocationWaitingListApi.md#allocationwaitinglistGet) | **GET** /api/allocationwaitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.AllocationWaitingListApi* | [**allocationwaitinglistList**](docs/AllocationWaitingListApi.md#allocationwaitinglistList) | **GET** /api/allocationwaitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.AllocationWaitingListApi* | [**allocationwaitinglistUpdate**](docs/AllocationWaitingListApi.md#allocationwaitinglistUpdate) | **PUT** /api/allocationwaitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.BookingInterestApi* | [**bookinginterestCreate**](docs/BookingInterestApi.md#bookinginterestCreate) | **POST** /api/bookinginterest | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.BookingInterestApi* | [**bookinginterestDelete**](docs/BookingInterestApi.md#bookinginterestDelete) | **DELETE** /api/bookinginterest/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.BookingInterestApi* | [**bookinginterestGet**](docs/BookingInterestApi.md#bookinginterestGet) | **GET** /api/bookinginterest/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.BookingInterestApi* | [**bookinginterestList**](docs/BookingInterestApi.md#bookinginterestList) | **GET** /api/bookinginterest | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.BookingInterestApi* | [**bookinginterestUpdate**](docs/BookingInterestApi.md#bookinginterestUpdate) | **PUT** /api/bookinginterest/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.CategoryApi* | [**categoryCreate**](docs/CategoryApi.md#categoryCreate) | **POST** /api/category | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.CategoryApi* | [**categoryDelete**](docs/CategoryApi.md#categoryDelete) | **DELETE** /api/category/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.CategoryApi* | [**categoryGet**](docs/CategoryApi.md#categoryGet) | **GET** /api/category/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.CategoryApi* | [**categoryList**](docs/CategoryApi.md#categoryList) | **GET** /api/category | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.CategoryApi* | [**categoryUpdate**](docs/CategoryApi.md#categoryUpdate) | **PUT** /api/category/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.CertificateApi* | [**certificateCreate**](docs/CertificateApi.md#certificateCreate) | **POST** /api/certificate | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.CertificateApi* | [**certificateDelete**](docs/CertificateApi.md#certificateDelete) | **DELETE** /api/certificate/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.CertificateApi* | [**certificateGet**](docs/CertificateApi.md#certificateGet) | **GET** /api/certificate/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.CertificateApi* | [**certificateList**](docs/CertificateApi.md#certificateList) | **GET** /api/certificate | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.CertificateApi* | [**certificateUpdate**](docs/CertificateApi.md#certificateUpdate) | **PUT** /api/certificate/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.ContactPersonApi* | [**contactpersonCreate**](docs/ContactPersonApi.md#contactpersonCreate) | **POST** /api/contactperson | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.ContactPersonApi* | [**contactpersonDelete**](docs/ContactPersonApi.md#contactpersonDelete) | **DELETE** /api/contactperson/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.ContactPersonApi* | [**contactpersonGet**](docs/ContactPersonApi.md#contactpersonGet) | **GET** /api/contactperson/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.ContactPersonApi* | [**contactpersonList**](docs/ContactPersonApi.md#contactpersonList) | **GET** /api/contactperson | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.ContactPersonApi* | [**contactpersonUpdate**](docs/ContactPersonApi.md#contactpersonUpdate) | **PUT** /api/contactperson/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.CountryApi* | [**countryCreate**](docs/CountryApi.md#countryCreate) | **POST** /api/country | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.CountryApi* | [**countryDelete**](docs/CountryApi.md#countryDelete) | **DELETE** /api/country/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.CountryApi* | [**countryGet**](docs/CountryApi.md#countryGet) | **GET** /api/country/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.CountryApi* | [**countryList**](docs/CountryApi.md#countryList) | **GET** /api/country | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.CountryApi* | [**countryUpdate**](docs/CountryApi.md#countryUpdate) | **PUT** /api/country/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.CouponApi* | [**couponCreate**](docs/CouponApi.md#couponCreate) | **POST** /api/coupon | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.CouponApi* | [**couponDelete**](docs/CouponApi.md#couponDelete) | **DELETE** /api/coupon/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.CouponApi* | [**couponGet**](docs/CouponApi.md#couponGet) | **GET** /api/coupon/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.CouponApi* | [**couponList**](docs/CouponApi.md#couponList) | **GET** /api/coupon | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.CouponApi* | [**couponUpdate**](docs/CouponApi.md#couponUpdate) | **PUT** /api/coupon/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.CouponCodeApi* | [**couponcodeCreate**](docs/CouponCodeApi.md#couponcodeCreate) | **POST** /api/couponcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.CouponCodeApi* | [**couponcodeDelete**](docs/CouponCodeApi.md#couponcodeDelete) | **DELETE** /api/couponcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.CouponCodeApi* | [**couponcodeGet**](docs/CouponCodeApi.md#couponcodeGet) | **GET** /api/couponcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.CouponCodeApi* | [**couponcodeList**](docs/CouponCodeApi.md#couponcodeList) | **GET** /api/couponcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.CouponCodeApi* | [**couponcodeUpdate**](docs/CouponCodeApi.md#couponcodeUpdate) | **PUT** /api/couponcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.CurrencyApi* | [**currencyCreate**](docs/CurrencyApi.md#currencyCreate) | **POST** /api/currency | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.CurrencyApi* | [**currencyDelete**](docs/CurrencyApi.md#currencyDelete) | **DELETE** /api/currency/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.CurrencyApi* | [**currencyGet**](docs/CurrencyApi.md#currencyGet) | **GET** /api/currency/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.CurrencyApi* | [**currencyList**](docs/CurrencyApi.md#currencyList) | **GET** /api/currency | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.CurrencyApi* | [**currencyUpdate**](docs/CurrencyApi.md#currencyUpdate) | **PUT** /api/currency/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.EducationHistoryItemApi* | [**educationhistoryitemCreate**](docs/EducationHistoryItemApi.md#educationhistoryitemCreate) | **POST** /api/educationhistoryitem | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.EducationHistoryItemApi* | [**educationhistoryitemDelete**](docs/EducationHistoryItemApi.md#educationhistoryitemDelete) | **DELETE** /api/educationhistoryitem/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.EducationHistoryItemApi* | [**educationhistoryitemGet**](docs/EducationHistoryItemApi.md#educationhistoryitemGet) | **GET** /api/educationhistoryitem/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.EducationHistoryItemApi* | [**educationhistoryitemList**](docs/EducationHistoryItemApi.md#educationhistoryitemList) | **GET** /api/educationhistoryitem | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.EducationHistoryItemApi* | [**educationhistoryitemUpdate**](docs/EducationHistoryItemApi.md#educationhistoryitemUpdate) | **PUT** /api/educationhistoryitem/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.EventApi* | [**eventCreate**](docs/EventApi.md#eventCreate) | **POST** /api/event | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.EventApi* | [**eventDelete**](docs/EventApi.md#eventDelete) | **DELETE** /api/event/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.EventApi* | [**eventGet**](docs/EventApi.md#eventGet) | **GET** /api/event/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.EventApi* | [**eventList**](docs/EventApi.md#eventList) | **GET** /api/event | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.EventApi* | [**eventUpdate**](docs/EventApi.md#eventUpdate) | **PUT** /api/event/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.HotelApi* | [**hotelCreate**](docs/HotelApi.md#hotelCreate) | **POST** /api/hotel | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.HotelApi* | [**hotelDelete**](docs/HotelApi.md#hotelDelete) | **DELETE** /api/hotel/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.HotelApi* | [**hotelGet**](docs/HotelApi.md#hotelGet) | **GET** /api/hotel/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.HotelApi* | [**hotelList**](docs/HotelApi.md#hotelList) | **GET** /api/hotel | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.HotelApi* | [**hotelUpdate**](docs/HotelApi.md#hotelUpdate) | **PUT** /api/hotel/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.LanguageApi* | [**languageCreate**](docs/LanguageApi.md#languageCreate) | **POST** /api/language | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.LanguageApi* | [**languageDelete**](docs/LanguageApi.md#languageDelete) | **DELETE** /api/language/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.LanguageApi* | [**languageGet**](docs/LanguageApi.md#languageGet) | **GET** /api/language/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.LanguageApi* | [**languageList**](docs/LanguageApi.md#languageList) | **GET** /api/language | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.LanguageApi* | [**languageUpdate**](docs/LanguageApi.md#languageUpdate) | **PUT** /api/language/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.LocationApi* | [**locationCreate**](docs/LocationApi.md#locationCreate) | **POST** /api/location | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.LocationApi* | [**locationDelete**](docs/LocationApi.md#locationDelete) | **DELETE** /api/location/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.LocationApi* | [**locationGet**](docs/LocationApi.md#locationGet) | **GET** /api/location/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.LocationApi* | [**locationList**](docs/LocationApi.md#locationList) | **GET** /api/location | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.LocationApi* | [**locationUpdate**](docs/LocationApi.md#locationUpdate) | **PUT** /api/location/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.MediaApi* | [**mediaCreate**](docs/MediaApi.md#mediaCreate) | **POST** /api/media | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.MediaApi* | [**mediaDelete**](docs/MediaApi.md#mediaDelete) | **DELETE** /api/media/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.MediaApi* | [**mediaGet**](docs/MediaApi.md#mediaGet) | **GET** /api/media/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.MediaApi* | [**mediaList**](docs/MediaApi.md#mediaList) | **GET** /api/media | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.MediaApi* | [**mediaUpdate**](docs/MediaApi.md#mediaUpdate) | **PUT** /api/media/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.OrderApi* | [**orderCreate**](docs/OrderApi.md#orderCreate) | **POST** /api/order | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.OrderApi* | [**orderDelete**](docs/OrderApi.md#orderDelete) | **DELETE** /api/order/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.OrderApi* | [**orderGet**](docs/OrderApi.md#orderGet) | **GET** /api/order/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.OrderApi* | [**orderList**](docs/OrderApi.md#orderList) | **GET** /api/order | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.OrderApi* | [**orderUpdate**](docs/OrderApi.md#orderUpdate) | **PUT** /api/order/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.OrganizerApi* | [**organizerCreate**](docs/OrganizerApi.md#organizerCreate) | **POST** /api/organizer | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.OrganizerApi* | [**organizerDelete**](docs/OrganizerApi.md#organizerDelete) | **DELETE** /api/organizer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.OrganizerApi* | [**organizerGet**](docs/OrganizerApi.md#organizerGet) | **GET** /api/organizer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.OrganizerApi* | [**organizerList**](docs/OrganizerApi.md#organizerList) | **GET** /api/organizer | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.OrganizerApi* | [**organizerUpdate**](docs/OrganizerApi.md#organizerUpdate) | **PUT** /api/organizer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.ParticipantApi* | [**participantCreate**](docs/ParticipantApi.md#participantCreate) | **POST** /api/participant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.ParticipantApi* | [**participantDelete**](docs/ParticipantApi.md#participantDelete) | **DELETE** /api/participant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.ParticipantApi* | [**participantGet**](docs/ParticipantApi.md#participantGet) | **GET** /api/participant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.ParticipantApi* | [**participantList**](docs/ParticipantApi.md#participantList) | **GET** /api/participant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.ParticipantApi* | [**participantUpdate**](docs/ParticipantApi.md#participantUpdate) | **PUT** /api/participant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.ParticipationApi* | [**participationCreate**](docs/ParticipationApi.md#participationCreate) | **POST** /api/participation | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.ParticipationApi* | [**participationDelete**](docs/ParticipationApi.md#participationDelete) | **DELETE** /api/participation/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.ParticipationApi* | [**participationGet**](docs/ParticipationApi.md#participationGet) | **GET** /api/participation/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.ParticipationApi* | [**participationList**](docs/ParticipationApi.md#participationList) | **GET** /api/participation | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.ParticipationApi* | [**participationUpdate**](docs/ParticipationApi.md#participationUpdate) | **PUT** /api/participation/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.ParticipationCodeApi* | [**participationcodeCreate**](docs/ParticipationCodeApi.md#participationcodeCreate) | **POST** /api/participationcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.ParticipationCodeApi* | [**participationcodeDelete**](docs/ParticipationCodeApi.md#participationcodeDelete) | **DELETE** /api/participationcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.ParticipationCodeApi* | [**participationcodeGet**](docs/ParticipationCodeApi.md#participationcodeGet) | **GET** /api/participationcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.ParticipationCodeApi* | [**participationcodeList**](docs/ParticipationCodeApi.md#participationcodeList) | **GET** /api/participationcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.ParticipationCodeApi* | [**participationcodeUpdate**](docs/ParticipationCodeApi.md#participationcodeUpdate) | **PUT** /api/participationcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.PartnerApi* | [**partnerCreate**](docs/PartnerApi.md#partnerCreate) | **POST** /api/partner | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.PartnerApi* | [**partnerDelete**](docs/PartnerApi.md#partnerDelete) | **DELETE** /api/partner/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.PartnerApi* | [**partnerGet**](docs/PartnerApi.md#partnerGet) | **GET** /api/partner/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.PartnerApi* | [**partnerList**](docs/PartnerApi.md#partnerList) | **GET** /api/partner | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.PartnerApi* | [**partnerUpdate**](docs/PartnerApi.md#partnerUpdate) | **PUT** /api/partner/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.PaymentMethodApi* | [**paymentmethodCreate**](docs/PaymentMethodApi.md#paymentmethodCreate) | **POST** /api/paymentmethod | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.PaymentMethodApi* | [**paymentmethodDelete**](docs/PaymentMethodApi.md#paymentmethodDelete) | **DELETE** /api/paymentmethod/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.PaymentMethodApi* | [**paymentmethodGet**](docs/PaymentMethodApi.md#paymentmethodGet) | **GET** /api/paymentmethod/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.PaymentMethodApi* | [**paymentmethodList**](docs/PaymentMethodApi.md#paymentmethodList) | **GET** /api/paymentmethod | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.PaymentMethodApi* | [**paymentmethodUpdate**](docs/PaymentMethodApi.md#paymentmethodUpdate) | **PUT** /api/paymentmethod/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.PriceApi* | [**priceCreate**](docs/PriceApi.md#priceCreate) | **POST** /api/price | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.PriceApi* | [**priceDelete**](docs/PriceApi.md#priceDelete) | **DELETE** /api/price/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.PriceApi* | [**priceGet**](docs/PriceApi.md#priceGet) | **GET** /api/price/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.PriceApi* | [**priceList**](docs/PriceApi.md#priceList) | **GET** /api/price | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.PriceApi* | [**priceUpdate**](docs/PriceApi.md#priceUpdate) | **PUT** /api/price/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.ProductApi* | [**productCreate**](docs/ProductApi.md#productCreate) | **POST** /api/product | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.ProductApi* | [**productDelete**](docs/ProductApi.md#productDelete) | **DELETE** /api/product/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.ProductApi* | [**productGet**](docs/ProductApi.md#productGet) | **GET** /api/product/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.ProductApi* | [**productList**](docs/ProductApi.md#productList) | **GET** /api/product | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.ProductApi* | [**productUpdate**](docs/ProductApi.md#productUpdate) | **PUT** /api/product/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.ProductVariantApi* | [**productvariantCreate**](docs/ProductVariantApi.md#productvariantCreate) | **POST** /api/productvariant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.ProductVariantApi* | [**productvariantDelete**](docs/ProductVariantApi.md#productvariantDelete) | **DELETE** /api/productvariant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.ProductVariantApi* | [**productvariantGet**](docs/ProductVariantApi.md#productvariantGet) | **GET** /api/productvariant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.ProductVariantApi* | [**productvariantList**](docs/ProductVariantApi.md#productvariantList) | **GET** /api/productvariant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.ProductVariantApi* | [**productvariantUpdate**](docs/ProductVariantApi.md#productvariantUpdate) | **PUT** /api/productvariant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.ProviderInfoApi* | [**providerinfoCreate**](docs/ProviderInfoApi.md#providerinfoCreate) | **POST** /api/providerinfo | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.ProviderInfoApi* | [**providerinfoDelete**](docs/ProviderInfoApi.md#providerinfoDelete) | **DELETE** /api/providerinfo/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.ProviderInfoApi* | [**providerinfoGet**](docs/ProviderInfoApi.md#providerinfoGet) | **GET** /api/providerinfo/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.ProviderInfoApi* | [**providerinfoList**](docs/ProviderInfoApi.md#providerinfoList) | **GET** /api/providerinfo | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.ProviderInfoApi* | [**providerinfoUpdate**](docs/ProviderInfoApi.md#providerinfoUpdate) | **PUT** /api/providerinfo/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.ReceiverApi* | [**receiverCreate**](docs/ReceiverApi.md#receiverCreate) | **POST** /api/receiver | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.ReceiverApi* | [**receiverDelete**](docs/ReceiverApi.md#receiverDelete) | **DELETE** /api/receiver/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.ReceiverApi* | [**receiverGet**](docs/ReceiverApi.md#receiverGet) | **GET** /api/receiver/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.ReceiverApi* | [**receiverList**](docs/ReceiverApi.md#receiverList) | **GET** /api/receiver | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.ReceiverApi* | [**receiverUpdate**](docs/ReceiverApi.md#receiverUpdate) | **PUT** /api/receiver/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.RegionApi* | [**regionCreate**](docs/RegionApi.md#regionCreate) | **POST** /api/region | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.RegionApi* | [**regionDelete**](docs/RegionApi.md#regionDelete) | **DELETE** /api/region/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.RegionApi* | [**regionGet**](docs/RegionApi.md#regionGet) | **GET** /api/region/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.RegionApi* | [**regionList**](docs/RegionApi.md#regionList) | **GET** /api/region | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.RegionApi* | [**regionUpdate**](docs/RegionApi.md#regionUpdate) | **PUT** /api/region/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.RestaurantApi* | [**restaurantCreate**](docs/RestaurantApi.md#restaurantCreate) | **POST** /api/restaurant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.RestaurantApi* | [**restaurantDelete**](docs/RestaurantApi.md#restaurantDelete) | **DELETE** /api/restaurant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.RestaurantApi* | [**restaurantGet**](docs/RestaurantApi.md#restaurantGet) | **GET** /api/restaurant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.RestaurantApi* | [**restaurantList**](docs/RestaurantApi.md#restaurantList) | **GET** /api/restaurant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.RestaurantApi* | [**restaurantUpdate**](docs/RestaurantApi.md#restaurantUpdate) | **PUT** /api/restaurant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.RevenueAccountApi* | [**revenueaccountCreate**](docs/RevenueAccountApi.md#revenueaccountCreate) | **POST** /api/revenueaccount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.RevenueAccountApi* | [**revenueaccountDelete**](docs/RevenueAccountApi.md#revenueaccountDelete) | **DELETE** /api/revenueaccount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.RevenueAccountApi* | [**revenueaccountGet**](docs/RevenueAccountApi.md#revenueaccountGet) | **GET** /api/revenueaccount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.RevenueAccountApi* | [**revenueaccountList**](docs/RevenueAccountApi.md#revenueaccountList) | **GET** /api/revenueaccount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.RevenueAccountApi* | [**revenueaccountUpdate**](docs/RevenueAccountApi.md#revenueaccountUpdate) | **PUT** /api/revenueaccount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.RoleDiscountApi* | [**rolediscountCreate**](docs/RoleDiscountApi.md#rolediscountCreate) | **POST** /api/rolediscount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.RoleDiscountApi* | [**rolediscountDelete**](docs/RoleDiscountApi.md#rolediscountDelete) | **DELETE** /api/rolediscount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.RoleDiscountApi* | [**rolediscountGet**](docs/RoleDiscountApi.md#rolediscountGet) | **GET** /api/rolediscount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.RoleDiscountApi* | [**rolediscountList**](docs/RoleDiscountApi.md#rolediscountList) | **GET** /api/rolediscount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.RoleDiscountApi* | [**rolediscountUpdate**](docs/RoleDiscountApi.md#rolediscountUpdate) | **PUT** /api/rolediscount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.SeminarApi* | [**seminarCreate**](docs/SeminarApi.md#seminarCreate) | **POST** /api/seminar | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.SeminarApi* | [**seminarDelete**](docs/SeminarApi.md#seminarDelete) | **DELETE** /api/seminar/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.SeminarApi* | [**seminarGet**](docs/SeminarApi.md#seminarGet) | **GET** /api/seminar/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.SeminarApi* | [**seminarList**](docs/SeminarApi.md#seminarList) | **GET** /api/seminar | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.SeminarApi* | [**seminarUpdate**](docs/SeminarApi.md#seminarUpdate) | **PUT** /api/seminar/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.SeminarConfigurationApi* | [**seminarconfigurationCreate**](docs/SeminarConfigurationApi.md#seminarconfigurationCreate) | **POST** /api/seminarconfiguration | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.SeminarConfigurationApi* | [**seminarconfigurationDelete**](docs/SeminarConfigurationApi.md#seminarconfigurationDelete) | **DELETE** /api/seminarconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.SeminarConfigurationApi* | [**seminarconfigurationGet**](docs/SeminarConfigurationApi.md#seminarconfigurationGet) | **GET** /api/seminarconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.SeminarConfigurationApi* | [**seminarconfigurationList**](docs/SeminarConfigurationApi.md#seminarconfigurationList) | **GET** /api/seminarconfiguration | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.SeminarConfigurationApi* | [**seminarconfigurationUpdate**](docs/SeminarConfigurationApi.md#seminarconfigurationUpdate) | **PUT** /api/seminarconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.SubscriptionApi* | [**subscriptionCreate**](docs/SubscriptionApi.md#subscriptionCreate) | **POST** /api/subscription | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.SubscriptionApi* | [**subscriptionDelete**](docs/SubscriptionApi.md#subscriptionDelete) | **DELETE** /api/subscription/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.SubscriptionApi* | [**subscriptionGet**](docs/SubscriptionApi.md#subscriptionGet) | **GET** /api/subscription/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.SubscriptionApi* | [**subscriptionList**](docs/SubscriptionApi.md#subscriptionList) | **GET** /api/subscription | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.SubscriptionApi* | [**subscriptionUpdate**](docs/SubscriptionApi.md#subscriptionUpdate) | **PUT** /api/subscription/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.SubscriptionConfigurationApi* | [**subscriptionconfigurationCreate**](docs/SubscriptionConfigurationApi.md#subscriptionconfigurationCreate) | **POST** /api/subscriptionconfiguration | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.SubscriptionConfigurationApi* | [**subscriptionconfigurationDelete**](docs/SubscriptionConfigurationApi.md#subscriptionconfigurationDelete) | **DELETE** /api/subscriptionconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.SubscriptionConfigurationApi* | [**subscriptionconfigurationGet**](docs/SubscriptionConfigurationApi.md#subscriptionconfigurationGet) | **GET** /api/subscriptionconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.SubscriptionConfigurationApi* | [**subscriptionconfigurationList**](docs/SubscriptionConfigurationApi.md#subscriptionconfigurationList) | **GET** /api/subscriptionconfiguration | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.SubscriptionConfigurationApi* | [**subscriptionconfigurationUpdate**](docs/SubscriptionConfigurationApi.md#subscriptionconfigurationUpdate) | **PUT** /api/subscriptionconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.SubscriptionPlanApi* | [**subscriptionplanCreate**](docs/SubscriptionPlanApi.md#subscriptionplanCreate) | **POST** /api/subscriptionplan | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.SubscriptionPlanApi* | [**subscriptionplanDelete**](docs/SubscriptionPlanApi.md#subscriptionplanDelete) | **DELETE** /api/subscriptionplan/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.SubscriptionPlanApi* | [**subscriptionplanGet**](docs/SubscriptionPlanApi.md#subscriptionplanGet) | **GET** /api/subscriptionplan/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.SubscriptionPlanApi* | [**subscriptionplanList**](docs/SubscriptionPlanApi.md#subscriptionplanList) | **GET** /api/subscriptionplan | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.SubscriptionPlanApi* | [**subscriptionplanUpdate**](docs/SubscriptionPlanApi.md#subscriptionplanUpdate) | **PUT** /api/subscriptionplan/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.TaskApi* | [**taskCreate**](docs/TaskApi.md#taskCreate) | **POST** /api/task | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.TaskApi* | [**taskDelete**](docs/TaskApi.md#taskDelete) | **DELETE** /api/task/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.TaskApi* | [**taskGet**](docs/TaskApi.md#taskGet) | **GET** /api/task/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.TaskApi* | [**taskList**](docs/TaskApi.md#taskList) | **GET** /api/task | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.TaskApi* | [**taskUpdate**](docs/TaskApi.md#taskUpdate) | **PUT** /api/task/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.TestApi* | [**testCreate**](docs/TestApi.md#testCreate) | **POST** /api/test | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.TestApi* | [**testDelete**](docs/TestApi.md#testDelete) | **DELETE** /api/test/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.TestApi* | [**testGet**](docs/TestApi.md#testGet) | **GET** /api/test/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.TestApi* | [**testList**](docs/TestApi.md#testList) | **GET** /api/test | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.TestApi* | [**testUpdate**](docs/TestApi.md#testUpdate) | **PUT** /api/test/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.TestResultApi* | [**testresultCreate**](docs/TestResultApi.md#testresultCreate) | **POST** /api/testresult | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.TestResultApi* | [**testresultDelete**](docs/TestResultApi.md#testresultDelete) | **DELETE** /api/testresult/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.TestResultApi* | [**testresultGet**](docs/TestResultApi.md#testresultGet) | **GET** /api/testresult/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.TestResultApi* | [**testresultList**](docs/TestResultApi.md#testresultList) | **GET** /api/testresult | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.TestResultApi* | [**testresultUpdate**](docs/TestResultApi.md#testresultUpdate) | **PUT** /api/testresult/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.TopicApi* | [**topicCreate**](docs/TopicApi.md#topicCreate) | **POST** /api/topic | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.TopicApi* | [**topicDelete**](docs/TopicApi.md#topicDelete) | **DELETE** /api/topic/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.TopicApi* | [**topicGet**](docs/TopicApi.md#topicGet) | **GET** /api/topic/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.TopicApi* | [**topicList**](docs/TopicApi.md#topicList) | **GET** /api/topic | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.TopicApi* | [**topicUpdate**](docs/TopicApi.md#topicUpdate) | **PUT** /api/topic/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.TrainerApi* | [**trainerCreate**](docs/TrainerApi.md#trainerCreate) | **POST** /api/trainer | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.TrainerApi* | [**trainerDelete**](docs/TrainerApi.md#trainerDelete) | **DELETE** /api/trainer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.TrainerApi* | [**trainerGet**](docs/TrainerApi.md#trainerGet) | **GET** /api/trainer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.TrainerApi* | [**trainerList**](docs/TrainerApi.md#trainerList) | **GET** /api/trainer | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.TrainerApi* | [**trainerUpdate**](docs/TrainerApi.md#trainerUpdate) | **PUT** /api/trainer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.UserApi* | [**userCreate**](docs/UserApi.md#userCreate) | **POST** /api/user | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.UserApi* | [**userDelete**](docs/UserApi.md#userDelete) | **DELETE** /api/user/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.UserApi* | [**userGet**](docs/UserApi.md#userGet) | **GET** /api/user/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.UserApi* | [**userList**](docs/UserApi.md#userList) | **GET** /api/user | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.UserApi* | [**userUpdate**](docs/UserApi.md#userUpdate) | **PUT** /api/user/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.UserGroupApi* | [**usergroupCreate**](docs/UserGroupApi.md#usergroupCreate) | **POST** /api/usergroup | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.UserGroupApi* | [**usergroupDelete**](docs/UserGroupApi.md#usergroupDelete) | **DELETE** /api/usergroup/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.UserGroupApi* | [**usergroupGet**](docs/UserGroupApi.md#usergroupGet) | **GET** /api/usergroup/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.UserGroupApi* | [**usergroupList**](docs/UserGroupApi.md#usergroupList) | **GET** /api/usergroup | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.UserGroupApi* | [**usergroupUpdate**](docs/UserGroupApi.md#usergroupUpdate) | **PUT** /api/usergroup/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.VatApi* | [**vatCreate**](docs/VatApi.md#vatCreate) | **POST** /api/vat | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.VatApi* | [**vatDelete**](docs/VatApi.md#vatDelete) | **DELETE** /api/vat/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.VatApi* | [**vatGet**](docs/VatApi.md#vatGet) | **GET** /api/vat/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.VatApi* | [**vatList**](docs/VatApi.md#vatList) | **GET** /api/vat | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.VatApi* | [**vatUpdate**](docs/VatApi.md#vatUpdate) | **PUT** /api/vat/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
*SeminarCatalogApi.WaitingListApi* | [**waitinglistCreate**](docs/WaitingListApi.md#waitinglistCreate) | **POST** /api/waitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
*SeminarCatalogApi.WaitingListApi* | [**waitinglistDelete**](docs/WaitingListApi.md#waitinglistDelete) | **DELETE** /api/waitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
*SeminarCatalogApi.WaitingListApi* | [**waitinglistGet**](docs/WaitingListApi.md#waitinglistGet) | **GET** /api/waitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
*SeminarCatalogApi.WaitingListApi* | [**waitinglistList**](docs/WaitingListApi.md#waitinglistList) | **GET** /api/waitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
*SeminarCatalogApi.WaitingListApi* | [**waitinglistUpdate**](docs/WaitingListApi.md#waitinglistUpdate) | **PUT** /api/waitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


### Documentation for Models

 - [SeminarCatalogApi.Address](docs/Address.md)
 - [SeminarCatalogApi.AddressPaginationResult](docs/AddressPaginationResult.md)
 - [SeminarCatalogApi.AllocationWaitingList](docs/AllocationWaitingList.md)
 - [SeminarCatalogApi.AllocationWaitingListPaginationResult](docs/AllocationWaitingListPaginationResult.md)
 - [SeminarCatalogApi.BookingInterest](docs/BookingInterest.md)
 - [SeminarCatalogApi.BookingInterestPaginationResult](docs/BookingInterestPaginationResult.md)
 - [SeminarCatalogApi.Category](docs/Category.md)
 - [SeminarCatalogApi.CategoryPaginationResult](docs/CategoryPaginationResult.md)
 - [SeminarCatalogApi.Certificate](docs/Certificate.md)
 - [SeminarCatalogApi.CertificatePaginationResult](docs/CertificatePaginationResult.md)
 - [SeminarCatalogApi.ContactPerson](docs/ContactPerson.md)
 - [SeminarCatalogApi.ContactPersonPaginationResult](docs/ContactPersonPaginationResult.md)
 - [SeminarCatalogApi.Country](docs/Country.md)
 - [SeminarCatalogApi.CountryPaginationResult](docs/CountryPaginationResult.md)
 - [SeminarCatalogApi.Coupon](docs/Coupon.md)
 - [SeminarCatalogApi.CouponCode](docs/CouponCode.md)
 - [SeminarCatalogApi.CouponCodePaginationResult](docs/CouponCodePaginationResult.md)
 - [SeminarCatalogApi.CouponPaginationResult](docs/CouponPaginationResult.md)
 - [SeminarCatalogApi.Currency](docs/Currency.md)
 - [SeminarCatalogApi.CurrencyPaginationResult](docs/CurrencyPaginationResult.md)
 - [SeminarCatalogApi.EducationHistoryItem](docs/EducationHistoryItem.md)
 - [SeminarCatalogApi.EducationHistoryItemPaginationResult](docs/EducationHistoryItemPaginationResult.md)
 - [SeminarCatalogApi.Event](docs/Event.md)
 - [SeminarCatalogApi.EventPaginationResult](docs/EventPaginationResult.md)
 - [SeminarCatalogApi.Hotel](docs/Hotel.md)
 - [SeminarCatalogApi.HotelPaginationResult](docs/HotelPaginationResult.md)
 - [SeminarCatalogApi.Language](docs/Language.md)
 - [SeminarCatalogApi.LanguagePaginationResult](docs/LanguagePaginationResult.md)
 - [SeminarCatalogApi.Location](docs/Location.md)
 - [SeminarCatalogApi.LocationPaginationResult](docs/LocationPaginationResult.md)
 - [SeminarCatalogApi.Media](docs/Media.md)
 - [SeminarCatalogApi.MediaPaginationResult](docs/MediaPaginationResult.md)
 - [SeminarCatalogApi.Order](docs/Order.md)
 - [SeminarCatalogApi.OrderPaginationResult](docs/OrderPaginationResult.md)
 - [SeminarCatalogApi.Organizer](docs/Organizer.md)
 - [SeminarCatalogApi.OrganizerPaginationResult](docs/OrganizerPaginationResult.md)
 - [SeminarCatalogApi.Participant](docs/Participant.md)
 - [SeminarCatalogApi.ParticipantPaginationResult](docs/ParticipantPaginationResult.md)
 - [SeminarCatalogApi.Participation](docs/Participation.md)
 - [SeminarCatalogApi.ParticipationCode](docs/ParticipationCode.md)
 - [SeminarCatalogApi.ParticipationCodePaginationResult](docs/ParticipationCodePaginationResult.md)
 - [SeminarCatalogApi.ParticipationPaginationResult](docs/ParticipationPaginationResult.md)
 - [SeminarCatalogApi.Partner](docs/Partner.md)
 - [SeminarCatalogApi.PartnerPaginationResult](docs/PartnerPaginationResult.md)
 - [SeminarCatalogApi.PaymentMethod](docs/PaymentMethod.md)
 - [SeminarCatalogApi.PaymentMethodPaginationResult](docs/PaymentMethodPaginationResult.md)
 - [SeminarCatalogApi.Price](docs/Price.md)
 - [SeminarCatalogApi.PricePaginationResult](docs/PricePaginationResult.md)
 - [SeminarCatalogApi.Product](docs/Product.md)
 - [SeminarCatalogApi.ProductPaginationResult](docs/ProductPaginationResult.md)
 - [SeminarCatalogApi.ProductVariant](docs/ProductVariant.md)
 - [SeminarCatalogApi.ProductVariantPaginationResult](docs/ProductVariantPaginationResult.md)
 - [SeminarCatalogApi.ProviderInfo](docs/ProviderInfo.md)
 - [SeminarCatalogApi.ProviderInfoPaginationResult](docs/ProviderInfoPaginationResult.md)
 - [SeminarCatalogApi.Receiver](docs/Receiver.md)
 - [SeminarCatalogApi.ReceiverPaginationResult](docs/ReceiverPaginationResult.md)
 - [SeminarCatalogApi.Region](docs/Region.md)
 - [SeminarCatalogApi.RegionPaginationResult](docs/RegionPaginationResult.md)
 - [SeminarCatalogApi.Restaurant](docs/Restaurant.md)
 - [SeminarCatalogApi.RestaurantPaginationResult](docs/RestaurantPaginationResult.md)
 - [SeminarCatalogApi.RevenueAccount](docs/RevenueAccount.md)
 - [SeminarCatalogApi.RevenueAccountPaginationResult](docs/RevenueAccountPaginationResult.md)
 - [SeminarCatalogApi.RoleDiscount](docs/RoleDiscount.md)
 - [SeminarCatalogApi.RoleDiscountPaginationResult](docs/RoleDiscountPaginationResult.md)
 - [SeminarCatalogApi.Seminar](docs/Seminar.md)
 - [SeminarCatalogApi.SeminarConfiguration](docs/SeminarConfiguration.md)
 - [SeminarCatalogApi.SeminarConfigurationPaginationResult](docs/SeminarConfigurationPaginationResult.md)
 - [SeminarCatalogApi.SeminarPaginationResult](docs/SeminarPaginationResult.md)
 - [SeminarCatalogApi.Subscription](docs/Subscription.md)
 - [SeminarCatalogApi.SubscriptionConfiguration](docs/SubscriptionConfiguration.md)
 - [SeminarCatalogApi.SubscriptionConfigurationPaginationResult](docs/SubscriptionConfigurationPaginationResult.md)
 - [SeminarCatalogApi.SubscriptionPaginationResult](docs/SubscriptionPaginationResult.md)
 - [SeminarCatalogApi.SubscriptionPlan](docs/SubscriptionPlan.md)
 - [SeminarCatalogApi.SubscriptionPlanPaginationResult](docs/SubscriptionPlanPaginationResult.md)
 - [SeminarCatalogApi.Task](docs/Task.md)
 - [SeminarCatalogApi.TaskPaginationResult](docs/TaskPaginationResult.md)
 - [SeminarCatalogApi.Test](docs/Test.md)
 - [SeminarCatalogApi.TestPaginationResult](docs/TestPaginationResult.md)
 - [SeminarCatalogApi.TestResult](docs/TestResult.md)
 - [SeminarCatalogApi.TestResultPaginationResult](docs/TestResultPaginationResult.md)
 - [SeminarCatalogApi.Topic](docs/Topic.md)
 - [SeminarCatalogApi.TopicPaginationResult](docs/TopicPaginationResult.md)
 - [SeminarCatalogApi.Trainer](docs/Trainer.md)
 - [SeminarCatalogApi.TrainerPaginationResult](docs/TrainerPaginationResult.md)
 - [SeminarCatalogApi.User](docs/User.md)
 - [SeminarCatalogApi.UserGroup](docs/UserGroup.md)
 - [SeminarCatalogApi.UserGroupPaginationResult](docs/UserGroupPaginationResult.md)
 - [SeminarCatalogApi.UserPaginationResult](docs/UserPaginationResult.md)
 - [SeminarCatalogApi.Vat](docs/Vat.md)
 - [SeminarCatalogApi.VatPaginationResult](docs/VatPaginationResult.md)
 - [SeminarCatalogApi.WaitingList](docs/WaitingList.md)
 - [SeminarCatalogApi.WaitingListPaginationResult](docs/WaitingListPaginationResult.md)


### Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Appendix
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.2.0
- Build package: de.databay.seminarcatalog.codegen.DatabayJsGenerator
    For more information, please visit [https://www.databay.de](https://www.databay.de)
