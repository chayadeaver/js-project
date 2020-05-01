class ItemsController < ApplicationController
    def index
        items = Item.all 
        render json: ItemSerializer.new(items)
    end
    
    def show
        item = Item.find_by(id: params[:id])
        render json: ItemSerializer.new(item).serialized_json
    end
end
