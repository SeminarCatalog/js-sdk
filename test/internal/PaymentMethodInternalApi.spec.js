/*
 * SeminarCatalog API
 * Rest API for SeminarCatalog Administration
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@databay.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SeminarCatalogApi);
  }
}(this, function(expect, SeminarCatalogApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SeminarCatalogApi.PaymentMethodInternalApi();
  });

  describe('(package)', function() {
    describe('PaymentMethodInternalApi', function() {
      describe('paymentmethodCreate', function() {
        it('should call paymentmethodCreate successfully', function(done) {
          // TODO: uncomment paymentmethodCreate call and complete the assertions
          /*

          instance.paymentmethodCreate().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.PaymentMethod);
            expect(data.type).to.be.a('string');
            // expect(data.type).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.imageSrc).to.be.a('string');
            // expect(data.imageSrc).to.be("");
            expect(data.provider).to.be.a('string');
            // expect(data.provider).to.be("");
            expect(data.controller).to.be.a('string');
            // expect(data.controller).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentmethodDelete', function() {
        it('should call paymentmethodDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentmethodDelete call and complete the assertions
          /*
          var id = 56;

          instance.paymentmethodDelete(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.PaymentMethod);
            expect(data.type).to.be.a('string');
            // expect(data.type).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.imageSrc).to.be.a('string');
            // expect(data.imageSrc).to.be("");
            expect(data.provider).to.be.a('string');
            // expect(data.provider).to.be("");
            expect(data.controller).to.be.a('string');
            // expect(data.controller).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentmethodGet', function() {
        it('should call paymentmethodGet successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentmethodGet call and complete the assertions
          /*
          var id = 56;

          instance.paymentmethodGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.PaymentMethod);
            expect(data.type).to.be.a('string');
            // expect(data.type).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.imageSrc).to.be.a('string');
            // expect(data.imageSrc).to.be("");
            expect(data.provider).to.be.a('string');
            // expect(data.provider).to.be("");
            expect(data.controller).to.be.a('string');
            // expect(data.controller).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentmethodList', function() {
        it('should call paymentmethodList successfully', function(done) {
          // TODO: uncomment paymentmethodList call and complete the assertions
          /*

          instance.paymentmethodList().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.PaymentMethodPaginationResult);
            expect(data.limit).to.be.a('number');
            // expect(data.limit).to.be(0);
            expect(data.offset).to.be.a('number');
            // expect(data.offset).to.be(0);
            expect(data.entryCount).to.be.a('number');
            // expect(data.entryCount).to.be(0);
            expect(data.maxEntryCount).to.be.a('number');
            // expect(data.maxEntryCount).to.be(0);
            {
              let dataCtr = data.entries;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SeminarCatalogApi.PaymentMethod);
                expect(data.type).to.be.a('string');
                // expect(data.type).to.be("");
                expect(data.title).to.be.a('string');
                // expect(data.title).to.be("");
                expect(data.imageSrc).to.be.a('string');
                // expect(data.imageSrc).to.be("");
                expect(data.provider).to.be.a('string');
                // expect(data.provider).to.be("");
                expect(data.controller).to.be.a('string');
                // expect(data.controller).to.be("");
                {
                  let dataCtr = data.syncFields;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    // expect(data).to.be("");
                  }
                }
                expect(data.id).to.be.a('number');
                // expect(data.id).to.be(0);
                expect(data.foreignId).to.be.a('string');
                // expect(data.foreignId).to.be("");
                expect(data.language).to.be.a('number');
                // expect(data.language).to.be(0);
                expect(data.createDate).to.be.a('number');
                // expect(data.createDate).to.be(0);
                expect(data.changeDate).to.be.a('number');
                // expect(data.changeDate).to.be(0);
                expect(data.deleted).to.be.a('number');
                // expect(data.deleted).to.be(0);
                expect(data.hidden).to.be.a('number');
                // expect(data.hidden).to.be(0);
                expect(data.sorting).to.be.a('number');
                // expect(data.sorting).to.be(0);
                expect(data.tags).to.be.a('string');
                // expect(data.tags).to.be("");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentmethodUpdate', function() {
        it('should call paymentmethodUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentmethodUpdate call and complete the assertions
          /*
          var id = 56;

          instance.paymentmethodUpdate(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.PaymentMethod);
            expect(data.type).to.be.a('string');
            // expect(data.type).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.imageSrc).to.be.a('string');
            // expect(data.imageSrc).to.be("");
            expect(data.provider).to.be.a('string');
            // expect(data.provider).to.be("");
            expect(data.controller).to.be.a('string');
            // expect(data.controller).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
