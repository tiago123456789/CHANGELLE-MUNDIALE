import logger from "../config/Logger";

class MercadoLivreCrawlerService {

    constructor(mercadoLivreCrawler, cacheClient) {
        this._TIME_EXPIRETION_CACHE = 1 * 60 * 60;
        this._mercadoLivreCrawler = mercadoLivreCrawler;
        this._cacheClient = cacheClient;
     }

    async findProductsByNameAndLimit(name, limit) {
        const productsInCache = await this._cacheClient.smembers(name);
        const isNotNecessaryExtractProductsData
 = (
            productsInCache != null && productsInCache.length >= limit
        );
    
        if (isNotNecessaryExtractProductsData) {
            const positionInitial = 0;
            logger.info(`Get datas products with search ${name} and limit ${limit} in cache.`);
            return productsInCache.slice(positionInitial, limit);
        } 
    
        const products = await this._mercadoLivreCrawler 
            .getContent({
                productName: name,
                quantityItensReturn: limit,
            });
    
        const isNotEmptyProductsArray = products.length > 0;
        if (isNotEmptyProductsArray) {
            logger.info(`Adding datas products with search ${name} and limit ${limit} in cache.`);
            await this._cacheClient.sadd(name, products, this._TIME_EXPIRETION_CACHE);
        }
    
        return products;
    }
}

export default MercadoLivreCrawlerService;