Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create]
    resource :session, only: [:new, :create, :destroy]
    resources :messages, only: [:index, :create]
    resources :rooms, only: [:index, :create]
  end
end
