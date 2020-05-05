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
            menu = Menu.find_by(id: params[:menu_id])
            item = menu.items.build(item_params)
            if item.save
                render json: ItemSerializer.new(item).serialized_json
            end
        end
    end

    def destroy
        item = Item.find_by(id: params[:id])
        if item.destroy
            render json: { message: "Item deleted"}
        end

    end

private

    def item_params
        params.permit(:name, :price, :description, :image_url, :menu_id)
    end
end
