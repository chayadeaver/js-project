class MenusController < ApplicationController
    def index
        menus = Menu.all 
        render json: MenuSerializer.new(menus)
    end

    def show
        menu = Menu.find_by(id: params[:id])
        render json: MenuSerializer.new(menu).serialized_json
    end
end
