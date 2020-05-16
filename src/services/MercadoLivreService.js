import axios from "axios";
import cheeiro from "cheerio";
import Cache from "../utils/Cache";

class MercadoLivreCrawlerService {

    constructor(mercadoLivreCrawler, cacheClient) {
        this._TIME_EXPIRETION_CACHE = 1 * 60 * 60;
        this._mercadoLivreCrawler = mercadoLivreCrawler;
        this._cacheClient = cacheClient;
     }

    async findProductsByNameAndLimit(name, limit) {
        const productsInCache = await this._cacheClient.smembers(name);
        const isNotNecessary_extractProductsData = (
            productsInCache != null && productsInCache.length >= limit
        );
    
        if (isNotNecessary_extractProductsData) {
            const positionInitial = 0;
            return productsInCache.slice(positionInitial, limit);
        }
    
        const products = await this._mercadoLivreCrawler
            .getContent({
                productName: name,
                quantityItensReturn: limit,
            });
    
        const isNotEmptyProductsArray = products.length > 0;
        if (isNotEmptyProductsArray) {
            await this._cacheClient.sadd(name, products, this._TIME_EXPIRETION_CACHE);
        }
    
        return products;
    }
}

export default MercadoLivreCrawlerService;