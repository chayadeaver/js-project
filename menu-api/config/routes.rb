Rails.application.routes.draw do
  root "home#welcome"
  resources :menus do
    resources :items
  end
  resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
