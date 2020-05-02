class ItemsController < ApplicationController
    def index
        items = Item.all 
        render json: ItemSerializer.new(items)
    end
    
    def show
        item = Item.find_by(id: params[:id])
        render json: ItemSerializer.new(item).serialized_json
    end

    def create
        if params[:menu_id]
            menu = Menu.find_by(menu_id: params[:menu_id])
            item = menu.items.build(item_params)
            if item.save
                render json: ItemSerializer.new(item).serialized_hash
            end
        end

    end

private

    def item_params
        params.require(:item).permit(:name, :price, :description, :image_url, :menu_id)
    end
end
