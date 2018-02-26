Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :tags
      resources :package_tags
      resources :packages
      resources :photo_tags
      resources :photos
      resources :photographers
      resources :users

      post "/login", to: "auth#create"
    end
  end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
