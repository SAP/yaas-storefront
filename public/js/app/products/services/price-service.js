/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2014 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

'use strict';

/**
 *  Encapsulates access to the price API.
 */
angular.module('ds.products')
    .factory('PriceSvc', ['caas', function(caas){

        return {

            /**
             * Registers a success callback handler on the API 'query' request - invoked once the
             * promise is resolved.
             * @param {parms} query parameters
             */
            query: function(parms) {
                return caas.prices.API.get(parms);
            }

        };

    }]);