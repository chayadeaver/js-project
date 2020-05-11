class HomeController < ApplicationController
    def welcome
        render json: { message: "Welcome to Chaya's Menu API!"}
    end
end
