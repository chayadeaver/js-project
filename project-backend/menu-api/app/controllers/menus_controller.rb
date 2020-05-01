class MenusController < ApplicationController
    def index
        menus = Menu.all 
        render json: menus, status: 200
    end
end
